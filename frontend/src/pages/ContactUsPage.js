import React, { useState } from 'react';
import './ContactUsPage.css';
import GoogleMap from '../components/GoogleMap';

const HOSTNAME = process.env.REACT_APP_HOSTNAME || 'localhost';
const PORT = process.env.REACT_APP_PORT || 5000;

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`http://${HOSTNAME}:${PORT}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Thank you for your message! We will get back to you soon.');
        setMessageType('success');
        // Reset form
        setForm({
          name: '',
          email: '',
          contact: '',
          division: '',
          comments: ''
        });
      } else {
        setMessage(result.message || 'Something went wrong. Please try again.');
        setMessageType('error');
      }
      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Network error. Please check your connection and try again.');
      setMessageType('error');
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactus-page">
      {/* Hero Section */}
      <section
        className="contactus-hero-section">
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

            {/* ABBASS Group Support Message */}
            <div className="abbass-support-message">
              <p>
                At The ABBASS Group, your success is our priority. Whether you're looking for expert advice on finance, property, business sales, or simply have a question about how we can support your journey, we're just a message away.<br /><br />
                Our dedicated team is here to provide prompt, diligent, and tailored support across all our services. Fill out the form, give us a call, or send us an email, we'll get back to you as soon as we can.
              </p>
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <div className="form-row">
                <select
                  name="division"
                  value={form.division}
                  onChange={handleChange}
                  required
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <button 
                type="submit" 
                className="contactus-submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Message Display */}
              {message && (
                <div className={`form-message ${messageType}`}>
                  {message}
                </div>
              )}
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