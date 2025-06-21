import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Australia's Trusted Partner in Property, Business, and Finance</h1>
          <p>Helping Australians invest smarter, buy better, and grow with expert guidance.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Find the Right Service for You</button>
            <button className="btn btn-secondary">Join ABBASS</button>
          </div>
        </div>
        {/* <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Professional business meeting" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero; 