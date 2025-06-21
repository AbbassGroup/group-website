import React from 'react';
import './GoogleMap.css';

const GoogleMap = ({ title = "ABBASS Group Location - South Melbourne" }) => {
  return (
    <section className="contact-map-section">
      <div className="contact-map-card">
        <iframe
          title={title}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.954444!3d-37.840556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1c4b5c5c5c5!2s102%2F24%20Albert%20Rd%2C%20South%20Melbourne%20VIC%203205%2C%20Australia!5e0!3m2!1sen!2sau!4v1747215870589!5m2!1sen!2sau"
          width="100%"
          height="340"
          style={{ border: 0, borderRadius: '18px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap; 