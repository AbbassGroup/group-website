import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import logoWhite from '../assets/images/nav_logo_white.png';

const Header = ({ disableScrollEffect, dark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Function to check if a nav item is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}${dark ? ' dark' : ''}`}> 
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {/* <img src={scrolled ? logoWhite : logo} alt="ABBASS Logo" /> */}
          <img src={logoWhite} alt="ABBASS Logo" />

        </Link>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <span role="img" aria-label="menu">&#9776;</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link></li>
          <li className="nav-item"><a href="/businessbrokers" className="nav-link" target="_blank" rel="noopener noreferrer">Business Brokers</a></li>
          <li className="nav-item"><Link to="/advocacy" className="nav-link" target="_blank" rel="noopener noreferrer">Advocacy</Link></li>
          <li className="nav-item"><Link to="/finance" className="nav-link" target="_blank" rel="noopener noreferrer">Finance</Link></li>
          <li className="nav-item"><a href="https://abbassglobalproperties.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Global Properties</a></li>
          <li className="nav-item"><Link to="/join-us" className={`nav-link${isActive('/join-us') ? ' active' : ''}`}>Join Us</Link></li>
          <li className="nav-item"><Link to="/contact-us" className={`nav-link${isActive('/contact-us') ? ' active' : ''}`}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header; 
