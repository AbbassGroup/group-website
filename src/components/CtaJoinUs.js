import React from 'react';
import { Link } from 'react-router-dom';
import './CtaJoinUs.css';

const CtaJoinUs = () => {
  return (
    <section className="cta-join-us-section">
      <div className="cta-join-us-container">
        <h2 className="cta-join-us-title">Ready to Start Your Journey?</h2>
        <p className="cta-join-us-subtitle">Join our team of experts and make a real impact in the industry.</p>
        <Link to="/join-us" className="cta-join-us-button">
          Join ABBASS Now
        </Link>
      </div>
    </section>
  );
};

export default CtaJoinUs; 