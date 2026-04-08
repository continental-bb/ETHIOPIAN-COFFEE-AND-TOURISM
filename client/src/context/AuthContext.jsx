// Import React hooks for state management and context
import { createContext, useState, useContext, useEffect } from 'react';
// Import axios for making HTTP requests to backend
import axios from 'axios';

// Create a context to share auth state globally across components
const AuthContext = createContext();

// Base URL for API requests (use env variable for flexibility)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

// AuthProvider component wraps the app and provides auth state
export const AuthProvider = ({ children }) => {
  // State to store current user information
  const [user, setUser] = useState(null);
  
  // State to store JWT token (get from localStorage on load)
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  // State to track loading status (useful for splash screens)
  const [loading, setLoading] = useState(true);

  // Effect: Run once on mount to check for existing token
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      // Optional: Fetch user profile from backend to validate token
      fetchUserProfile(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  // Effect: Update axios headers whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // Helper: Fetch user profile from backend to validate token
  const fetchUserProfile = async (authToken) => {
    try {
      const res = await axios.get(`${API_URL}/verify`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      if (res.data.success) {
        setUser(res.data.user);
      } else {
        // Token invalid, clear it
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('token');
      setToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login function: sends credentials to backend
  // Login function
const login = async (loginInput, password) => {
  try {
    const res = await axios.post(`${API_URL}/signin`, { 
      identifier: loginInput,
      password 
    });
    
    if (res.data.success) {
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      return { success: true }; // ✅ No navigate here
    }
    return { success: false, message: res.data.message };
  } catch (error) {
    console.error('Login error:', error.response?.data);
    return { 
      success: false, 
      message: error.response?.data?.message || 'Login failed' 
    };
  }
};

  // Signup function: sends registration data to backend
  const signup = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/signup`, userData);
    
    if (res.data.success) {
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      return { success: true };
    }
    return { success: false, message: res.data.message, errors: res.data.errors };
  } catch (error) {
    console.error('Signup error:', error.response?.data);
    return { 
      success: false, 
      message: error.response?.data?.message || 'Signup failed',
      errors: error.response?.data?.errors || []  // ✅ Return detailed errors
    };
  }
};

  // Logout function: clears auth state
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  // Provide auth state and functions to all child components
  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      loading,
      login, 
      signup, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access auth context in any component
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};