import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/images/nav_logo.png';
import logoWhite from '../assets/images/nav_logo_white.png';

const Header = ({ disableScrollEffect, dark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (disableScrollEffect) {
      setScrolled(false);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disableScrollEffect]);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}${dark ? ' dark' : ''}`}> 
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          {/* <img src={scrolled ? logoWhite : logo} alt="ABBASS Logo" /> */}
          <img src={logoWhite} alt="ABBASS Logo" />

        </a>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <span role="img" aria-label="menu">&#9776;</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/businessbrokers" className="nav-link">Business Brokers</a></li>
          <li className="nav-item"><a href="/advocacy" className="nav-link">Advocacy</a></li>
          <li className="nav-item"><a href="/finance" className="nav-link">Finance</a></li>
          <li className="nav-item"><a href="https://abbassglobalproperties.com/" className="nav-link">Global Properties</a></li>
          <li className="nav-item"><a href="/join-us" className="nav-link">Join Us</a></li>
          <li className="nav-item"><a href="/contact-us" className="nav-link">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header; 