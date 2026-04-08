import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './Landing.css';

import heroImage from '../assets/images/hero.jpg';
import coffeeImage from '../assets/images/coffee.jpg';
import ethiopiaImage from '../assets/images/ethiopia.jpg';

const Landing = () => {
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const loginSuccess = sessionStorage.getItem('loginSuccess');
    const signupSuccess = sessionStorage.getItem('signupSuccess');
    
    if (loginSuccess) {
      setSuccessMessage(loginSuccess);
      sessionStorage.removeItem('loginSuccess');
    } else if (signupSuccess) {
      setSuccessMessage(signupSuccess);
      sessionStorage.removeItem('signupSuccess');
    }

    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="landing-page">
      
      {successMessage && (
        <Container className="mt-4">
          <Alert variant="success" className="text-center" onClose={() => setSuccessMessage('')} dismissible>
            <i className="fas fa-check-circle me-2"></i>
            {successMessage}
          </Alert>
        </Container>
      )}

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="animate-fade-in">Discover Ethiopian Coffee Culture</h1>
          <p className="lead animate-fade-in-delay">Journey to the birthplace of coffee and experience authentic traditions, breathtaking landscapes, and unforgettable hospitality.</p>
          <a href="#experience" className="btn btn-light btn-lg animate-fade-in-delay-2">
            <i className="fas fa-coffee me-2"></i>Begin Your Journey
          </a>
        </Container>
      </section>

      {/* EXPERIENCE SECTION - ZIGZAG 1: IMAGE LEFT, TEXT RIGHT */}
      <section id="experience" className="content-section">
        <Container fluid className="px-0">
          <Row className="align-items-center mx-0">
            <Col lg={6} className="image-col px-2">
              <div className="image-frame">
                <img src={coffeeImage} className="section-image" alt="Ethiopian Coffee Ceremony" />
              </div>
            </Col>
            <Col lg={6} className="text-col px-2">
              <div className="text-content">
                <h2>The Birthplace of Coffee</h2>
                <p className="lead-text">Coffee in Ethiopia is more than a drink — it is an experience of connection.</p>
                <p>Through the traditional ceremony, every step, from roasting to pouring, is shared with care and intention. The aroma of fresh-roasted beans fills the air as stories are exchanged and bonds are formed.</p>
                <p>Visitors are welcomed not just as guests, but as part of the moment, where stories are told and time slows down over a simple cup of coffee. This is the heart of Ethiopian hospitality.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ORIGIN SECTION - ZIGZAG 2: TEXT LEFT, IMAGE RIGHT */}
      <section id="origin" className="content-section">
        <Container fluid className="px-0">
          <Row className="align-items-center mx-0">
            <Col lg={6} className="text-col px-2">
              <div className="text-content">
                <h2>From Bean to Journey</h2>
                <p className="lead-text">Every cup of coffee begins its journey in Ethiopia's highlands, where nature and tradition grow side by side.</p>
                <p>Here, coffee is cultivated with care, shaped by the land, and passed through generations. The misty mountains, rich soil, and perfect climate create beans with unparalleled flavor and character.</p>
                <p>Travelers can explore these origins, walking through the fields and discovering the story behind every bean — a journey that connects the earth to the cup. Experience where it all began.</p>
              </div>
            </Col>
            <Col lg={6} className="image-col px-2">
              <div className="image-frame">
                <img src={ethiopiaImage} className="section-image" alt="Ethiopian Highlands" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <Container>
          <p>&copy; 2025 Ethiopian Coffee & Tourism. All rights reserved.</p>
          <p className="mt-2" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
            <i className="fas fa-map-marker-alt me-2"></i>
            Sharing Ethiopia's Coffee Heritage with the World
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Landing;