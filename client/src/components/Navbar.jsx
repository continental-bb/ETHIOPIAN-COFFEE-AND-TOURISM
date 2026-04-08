import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const CustomNavbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          ETHIOPIAN COFFEE AND TOURISM
        </Navbar.Brand>

        <Nav className="ms-auto nav-bars">
          <Nav.Link as={Link} to="/" className={`nav-bar ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Nav.Link>
          
          <Nav.Link 
            as="a" 
            href="#experience" 
            className="nav-bar"
            onClick={(e) => {
              if (location.pathname !== '/') {
                e.preventDefault();
                window.location.href = '/#experience';
              }
            }}
          >
            Experience
          </Nav.Link>
          
          <Nav.Link 
            as="a" 
            href="#origin" 
            className="nav-bar"
            onClick={(e) => {
              if (location.pathname !== '/') {
                e.preventDefault();
                window.location.href = '/#origin';
              }
            }}
          >
            Origin
          </Nav.Link>

          <div className="nav-divider"></div>

          {user ? (
            <Button variant="outline-light" onClick={logout} className="auth-btn">
              Logout
            </Button>
          ) : (
            <>
              <Nav.Link as={Link} to="/login" className={`nav-bar ${location.pathname === '/login' ? 'active' : ''}`}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" className={`nav-bar ${location.pathname === '/signup' ? 'active' : ''}`}>
                Signup
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;