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

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="animate-fade-in">Discover Ethiopian Coffee Culture</h1>
          <p className="lead animate-fade-in-delay">Journey to the birthplace of coffee and experience authentic traditions, breathtaking landscapes, and unforgettable hospitality.</p>
          <a href="#about-coffee" className="btn btn-light btn-lg animate-fade-in-delay-2">
            <i className="fas fa-coffee me-2"></i>Begin Your Journey
          </a>
        </Container>
      </section>

      {/* ===== ABOUT COFFEE - Ethiopian Coffee Experience ===== */}
      <section id="about-coffee" className="content-section">
        <Container fluid className="px-0">
          <Row className="align-items-center mx-0">
            <Col lg={6} className="image-col px-3">
              <div className="image-frame">
                <img src={coffeeImage} className="section-image" alt="Ethiopian Coffee Ceremony" />
              </div>
            </Col>
            <Col lg={6} className="text-col px-3">
              <div className="text-content">
                <h2>The Art of Ethiopian Coffee</h2>
                <p className="lead-text">Experience the world's oldest coffee tradition, where every cup tells a story.</p>
                <p>Ethiopia is the ancestral home of Arabica coffee, where the legendary coffee ceremony has been cherished for centuries. From the misty highlands of Yirgacheffe to the rich soils of Sidamo, each region offers unique flavors shaped by altitude, climate, and generations of expertise.</p>
                <p>Join us for an authentic coffee journey—witness traditional roasting, participate in ancient brewing rituals, and savor flavors that have captivated coffee lovers for over a thousand years. This isn't just coffee; it's a cultural immersion.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== ABOUT ETHIOPIA - Tourism & Heritage ===== */}
      <section id="about-ethiopia" className="content-section">
        <Container fluid className="px-0">
          <Row className="align-items-center mx-0">
            <Col lg={6} className="text-col px-3">
              <div className="text-content">
                <h2>Explore Ethiopia's Wonders</h2>
                <p className="lead-text">Beyond coffee lies a land of ancient history, stunning landscapes, and warm hospitality.</p>
                <p>From the rock-hewn churches of Lalibela to the Simien Mountains' dramatic peaks, Ethiopia offers travelers an extraordinary adventure. Walk where humanity began in the Rift Valley, witness vibrant tribal cultures in the Omo Valley, and explore medieval castles in Gondar.</p>
                <p>Our curated experiences combine coffee heritage with Ethiopia's rich tapestry of history, nature, and culture. Whether you're trekking through coffee forests, sharing meals with local families, or discovering UNESCO World Heritage sites, every moment creates memories that last a lifetime.</p>
              </div>
            </Col>
            <Col lg={6} className="image-col px-3">
              <div className="image-frame">
                <img src={ethiopiaImage} className="section-image" alt="Ethiopian Highlands & Coffee Farms" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== FOOTER ===== */}
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