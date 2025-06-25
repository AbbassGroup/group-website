import React, { useState } from 'react';
import '../pages/JoinUsPage.css';
import GoogleMap from '../components/GoogleMap';

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setForm({ ...form, cv: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('contact', form.contact);
      formData.append('division', form.division);
      formData.append('comments', form.comments);
      formData.append('cv', form.cv);

      const response = await fetch('http://localhost:5000/api/join-us', {
        method: 'POST',
        body: formData // Don't set Content-Type header for FormData
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Thank you for your application! We will review your CV and get back to you soon.');
        setMessageType('success');
        // Reset form
        setForm({
          name: '',
          email: '',
          contact: '',
          division: '',
          comments: '',
          cv: null
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
      console.error('Error submitting application:', error);
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
    <div className="joinus-page">
      {/* Hero Section */}
      <section className="joinus-hero-section">
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
                <a href="mailto:info@abbass.group">careers@abbass.group</a>
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
                <li>Dynamic and innovative work environment</li>
                <li>Opportunities for career growth</li>
                <li>Flexibility and autonomy in how you work</li>
                <li>Work with industry experts</li>
                <li>Make a real impact in the market</li>
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
                <label className="cv-label">
                  Upload CV (PDF, DOC, DOCX)
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                    disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <button 
                type="submit" 
                className="joinus-submit-btn"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
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
      <div className="joinus-map-section">
        <div className="map-container">
          <h2>Find Us</h2>
        </div>
        <GoogleMap title="ABBASS Group Location - South Melbourne" />
      </div>
    </div>
  );
};

export default JoinUsPage; 