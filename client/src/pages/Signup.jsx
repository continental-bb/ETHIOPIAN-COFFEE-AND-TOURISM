// Import Chakra UI components for styling
import { Box, Button, Input, VStack, Heading, Text } from '@chakra-ui/react';

// Import Formik and Field for form handling
import { Formik, Form, Field } from 'formik';

// Import Yup for validation
import * as Yup from 'yup';

// Import auth context for signup function
import { useAuth } from '../context/AuthContext';

// Import navigation hooks
import { useNavigate, Link } from 'react-router-dom';

// Signup page component
const Signup = () => {
  // Get signup function from context
  const { signup } = useAuth();
  
  // Get navigate function for redirecting after signup
  const navigate = useNavigate();

  // Validation schema with helpful error messages
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Please choose a username'),
      
    email: Yup.string()
      .required('Please enter your email')
      .email('Please enter a proper email format (e.g., user@example.com)'),
      
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, 'Phone must be 10-15 digits (no spaces or dashes)')
      .required('Please enter your phone number'),
      
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[0-9]/, 'Password needs a number (0-9)')
      .matches(/[A-Z]/, 'Password needs an uppercase letter (A-Z)')
      .matches(/[!@#$%^&*]/, 'Password needs a symbol (!@#$%^&*)')
      .required('Please create a strong password'),
  });

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="6" color="brown.500">☕ Join the Club</Heading>
      
      <Formik
        initialValues={{ username: '', email: '', phone: '', password: '' }}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={false}
        onSubmit={async (values, { setErrors }) => {
          try {
            // Call signup function with form data
            await signup(values);
            // Redirect to menu on success
            navigate('/menu');
          } catch (err) {
            // Show error if signup fails
            setErrors({ email: 'User might already exist' });
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <VStack spacing="4">
              
              {/* Username Field */}
              <Input 
                name="username" 
                as={Field} 
                placeholder="Username" 
                isInvalid={errors.username && touched.username} 
              />
              {errors.username && touched.username && (
                <Text color="red.500" fontSize="sm" mt="1" role="alert" alignSelf="flex-start">
                  ⚠️ {errors.username}
                </Text>
              )}
              
              {/* Email Field */}
              <Input 
                name="email" 
                as={Field} 
                placeholder="Email" 
                isInvalid={errors.email && touched.email} 
              />
              {errors.email && touched.email && (
                <Text color="red.500" fontSize="sm" mt="1" role="alert" alignSelf="flex-start">
                  ⚠️ {errors.email}
                </Text>
              )}
              
              {/* Phone Field */}
              <Input 
                name="phone" 
                as={Field} 
                placeholder="Phone" 
                isInvalid={errors.phone && touched.phone} 
              />
              {errors.phone && touched.phone && (
                <Text color="red.500" fontSize="sm" mt="1" role="alert" alignSelf="flex-start">
                  ⚠️ {errors.phone}
                </Text>
              )}
              
              {/* Password Field */}
              <Input 
                name="password" 
                type="password" 
                as={Field} 
                placeholder="Strong Password" 
                isInvalid={errors.password && touched.password} 
              />
              {errors.password && touched.password && (
                <Text color="red.500" fontSize="sm" mt="1" role="alert" alignSelf="flex-start">
                  ⚠️ {errors.password}
                </Text>
              )}
              
              {/* Submit Button */}
              <Button type="submit" colorScheme="green" width="full">Sign Up</Button>
              
            </VStack>
          </Form>
        )}
      </Formik>
      
      {/* Link to Login Page */}
      <Text mt="4">
        Have an account? <Link to="/login" style={{color: 'blue'}}>Login</Link>
      </Text>
    </Box>
  );
};

export default Signup;