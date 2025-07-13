import React from 'react';
import './WhatWeDo.css';

const serviceIcons = [
  // Sell a Business - Bar chart
  <svg width="40" height="40" fill="none" stroke="var(--gray)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="8"/><rect x="9" y="8" width="4" height="12"/><rect x="15" y="4" width="4" height="16"/></svg>,
  // Buy a Business - Magnifying glass
  <svg width="40" height="40" fill="none" stroke="var(--gray)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  // Buyer Advocacy - Handshake
  <svg width="40" height="40" fill="none" stroke="var(--gray)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 8c0-1.1-.9-2-2-2H8C6.9 6 6 6.9 6 8v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8z"/><path d="M8 12h8"/></svg>,
  // Invest in Dubai - Building
  <svg width="40" height="40" fill="none" stroke="var(--gray)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="7" width="7" height="13"/><rect x="14" y="3" width="7" height="17"/><line x1="17.5" y1="17" x2="17.5" y2="17"/></svg>,
  // Finance Consultations - Pie chart
  <svg width="40" height="40" fill="none" stroke="var(--gray)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M12 12l9 3"/></svg>
];

const services = [
  {
    title: 'Sell a Business',
    description: 'Get the best value for your business with our expert brokers.',
    icon: serviceIcons[0],
    link: '/businessbrokers',
    target: '_blank'
  },
  {
    title: 'Buy a Business',
    description: 'Find the perfect business opportunity with our guidance.',
    icon: serviceIcons[1],
    link: '/businessbrokers',
    target: '_blank'
  },
  {
    title: 'Buyer Advocacy',
    description: 'Professional representation for property buyers.',
    icon: serviceIcons[2],
    link: '/advocacy',
    target: '_blank'
  },
  {
    title: 'Invest in Dubai',
    description: 'Explore premium real estate opportunities in Dubai.',
    icon: serviceIcons[3],
    link: 'https://abbassglobalproperties.com/',
    target: '_blank'
  },
  {
    title: 'Finance Consultations',
    description: 'Expert financial advice and funding solutions.',
    icon: serviceIcons[4],
    link: '/finance',
    target: '_blank'
  }
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        <h2>What We Do & How We Help</h2>
        <p className="intro-text">
          At ABBASS, we provide comprehensive solutions for business buying, property investing, 
          and international property acquisition. Our expert team guides you through every step 
          of your journey to ensure successful outcomes.
        </p>
        <div className="service-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="btn btn-secondary get-started-btn" target={service.target} rel="noopener noreferrer">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 