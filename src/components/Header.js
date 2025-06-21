import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/images/nav_logo.png';
import logoWhite from '../assets/images/nav_logo_white.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}> 
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          {/* <img src={scrolled ? logoWhite : logo} alt="ABBASS Logo" /> */}
          <img src={logoWhite} alt="ABBASS Logo" />

        </a>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <span role="img" aria-label="menu">&#9776;</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/business-brokers" className="nav-link">ABBASS Business Brokers</a></li>
          <li className="nav-item"><a href="/advocacy" className="nav-link">ABBASS Advocacy</a></li>
          <li className="nav-item"><a href="/finance" className="nav-link">ABBASS Finance</a></li>
          <li className="nav-item"><a href="/global-properties" className="nav-link">ABBASS Global Properties</a></li>
          <li className="nav-item"><a href="/join-us" className="nav-link">Join Us</a></li>
          <li className="nav-item"><a href="/contact-us" className="nav-link">Contact Us</a></li>
        </ul>
          <a href="tel:0391031317" className="contact-button">(03) 9103 1317</a>
        <ul className="nav-menu-right">
        </ul>
      </div>
    </nav>
  );
};

export default Header; 