import React, { useState } from 'react';
import './ContactUsPage.css';
import GoogleMap from '../components/GoogleMap';

const businessDivisions = [
  'Business Brokers',
  'Advocacy',
  'Finance',
  'Global Properties'
];

const ContactUsPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    division: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <div className="contactus-page">
      {/* Hero Section */}
      <section
        className="contactus-hero-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="contactus-hero-overlay">
          <h1 className="contactus-hero-title">Contact Us</h1>
          <p className="contactus-hero-subtitle">Get in touch with our team</p>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="contactus-content-section">
        <div className="contactus-content-container">
          {/* Left Side - Info Section */}
          <div className="contactus-info-col">
            <h2>Get in Touch</h2>
            <p>Ready to take the next step? Whether you're looking to buy, sell, or invest, our team of experts is here to help you achieve your goals. Contact us today for a personalized consultation.</p>
            
            <div className="contactus-contact-info">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:info@abbass.group">info@abbass.group</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:+61391031317">(03) 9103 1317</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>102/24 Albert Road, South Melbourne, VIC 3205</span>
              </div>
            </div>

            <div className="contactus-hours">
              <h3>Business Hours</h3>
              <div className="hours-item">
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
              </div>
              <div className="hours-item">
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </div>
              <div className="hours-item">
                <strong>Sunday:</strong> Closed
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="contactus-form-col">
            <h2>Send us a Message</h2>
            <form className="contactus-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <select
                  name="division"
                  value={form.division}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Business Division</option>
                  {businessDivisions.map((div, idx) => (
                    <option value={div} key={idx}>{div}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <textarea
                  name="comments"
                  placeholder="Your Message (Optional)"
                  value={form.comments}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <button type="submit" className="contactus-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="contactus-map-section">
        <div className="map-container">
          <h2>Find Us</h2>
        </div>
        <GoogleMap title="ABBASS Group Location - South Melbourne" />
      </div>
    </div>
  );
};

export default ContactUsPage; 