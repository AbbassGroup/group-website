import React from 'react';
import './GoogleMap.css';

const GoogleMap = ({ title = "ABBASS Group Locations" }) => {
  return (
    <section className="contact-map-section">
      <div className="contact-map-row">
        <div className="contact-map-col">
          <h3 className="map-location-title">South Melbourne</h3>
          <iframe
            title="ABBASS Group Location - South Melbourne"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.963058!3d-37.830478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2s101%20Moray%20St%2C%20South%20Melbourne%20VIC%203205%2C%20Australia!5e0!3m2!1sen!2sau!4v1680000000000!5m2!1sen!2sau"
            width="100%"
            height="340"
            style={{ border: 0, borderRadius: '18px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-map-col">
          <h3 className="map-location-title">Sydney</h3>
          <iframe
            title="ABBASS Group Location - Sydney"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.415234567890!2d151.206990!3d-33.868820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3e1e1e1e1e%3A0x2e2e2e2e2e2e2e2e!2s388%20George%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sau!4v1680000000001!5m2!1sen!2sau"
            width="100%"
            height="340"
            style={{ border: 0, borderRadius: '18px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap; 