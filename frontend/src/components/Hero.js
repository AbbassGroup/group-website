import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Australia's Trusted Partner in Property, Business, and Finance</h1>
          <p>Helping Australians invest smarter, buy better, and grow with expert guidance.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/contact-us')}>Find the Right Service for You</button>
            <button className="btn btn-secondary" onClick={() => navigate('/join-us')}>Join ABBASS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 