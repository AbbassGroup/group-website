import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   // <section className="hero">
   //   <div className="hero-overlay"></div>
   //   <div className="hero-container">
    //    <div className="hero-content">
    //      <h1>Australia's Trusted Partner in Property, Business, and Finance</h1>
   //       <p>Helping Australians invest smarter, buy better, and grow with expert guidance.</p>
    //      <div className="hero-buttons">
    //        <button className="btn btn-primary" onClick={() => navigate('/contact-us')}>Find the Right Service for You</button>
   //         <button className="btn btn-secondary" onClick={() => navigate('/join-us')}>Join ABBASS</button>
    //      </div>
    //    </div>
    //  </div>
    //</section>

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
      <div className="hero-scroll-arrow" onClick={scrollToServices} tabIndex={0} role="button" aria-label="Scroll to next section" onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToServices(); }}>
        <svg className="down-arrow-svg" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.0)"/>
          <path d="M16 20L24 28L32 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 