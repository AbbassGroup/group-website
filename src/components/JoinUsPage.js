import React, { useState } from 'react';
import './JoinUsPage.css';
import GoogleMap from './GoogleMap';

const businessDivisions = [
  'Business Brokers',
  'Advocacy',
  'Finance',
  'Global Properties'
];

const JoinUsPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    division: '',
    comments: '',
    cv: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setForm({ ...form, cv: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <div className="joinus-page">
      {/* Hero Section */}
      <section
        className="joinus-hero-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="joinus-hero-overlay">
          <h1 className="joinus-hero-title">Join Our Team</h1>
          <p className="joinus-hero-subtitle">Be part of something extraordinary</p>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="joinus-content-section">
        <div className="joinus-content-container">
          {/* Left Side - Info Section */}
          <div className="joinus-info-col">
            <h2>Work with ABBASS</h2>
            <p>We're always looking for talented, driven people to join our team. If you're passionate about property, business, or finance, and want to make a difference, we'd love to hear from you.</p>
            
            <div className="joinus-contact-info">
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

            <div className="joinus-benefits">
              <h3>Why Join ABBASS?</h3>
              <ul>
                <li>Dynamic and innovative work environment</li>
                <li>Opportunities for career growth</li>
                <li>Competitive compensation packages</li>
                <li>Work with industry experts</li>
                <li>Make a real impact in the market</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="joinus-form-col">
            <h2>Apply Now</h2>
            <form className="joinus-form" onSubmit={handleSubmit}>
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
                <label className="cv-label">
                  Upload CV (PDF)
                  <input
                    type="file"
                    name="cv"
                    accept="application/pdf"
                    onChange={handleChange}
                    required
                  />
                </label>
                {form.cv && <span className="cv-filename">{form.cv.name}</span>}
              </div>
              <div className="form-row">
                <textarea
                  name="comments"
                  placeholder="Additional Comments (Optional)"
                  value={form.comments}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <button type="submit" className="joinus-submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="joinus-map-section">
        <div className="map-container">
          <h2>Find Us</h2>
          <GoogleMap title="ABBASS Group Location - South Melbourne" />
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage; 