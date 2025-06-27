import React from 'react';
import './Footer.css';
import logo from '../assets/images/footer-logo.png'; // Update path as needed

const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="footer-new-container">
        <div className="footer-col logo-col">
          <img src={logo} alt="ABBASS Logo" className="footer-logo" />
          <div className="footer-address">102 / 24 Albert Road, South Melbourne, VIC 3205</div>
        </div>
        <div className="footer-col">
          <h4>Business Units</h4>
          <ul>
            <li><a href="/businessbrokers">ABBASS Business Brokers</a></li>
            <li><a href="/advocacy">ABBASS Advocacy</a></li>
            <li><a href="/finance">ABBASS Finance</a></li>
            <li><a href="https://abbassglobalproperties.com/">ABBASS Global Properties</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="/terms">Terms &amp; Condition</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/join-us">Join Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col contact-col">
          <div className="footer-contact-label"><h4>Contact Us</h4></div>
          <div className="footer-contact-phone"><button className="btn btn-secondary">(03) 9103 1317</button></div>
          <div className="footer-community-label">Join Our Community</div>
          <a href="https://www.linkedin.com/company/abbassgroup/" className="footer-linkedin" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} ABBASS Group, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 