import React, { useState } from 'react';
import './JoinTeam.css';

const businessDivisions = [
  'Business Brokers',
  'Advocacy',
  'Finance',
  'Global Properties'
];

const JoinTeam = () => {
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
  };

  return (
    <section className="join-team-section">
      <div className="join-team-container">
        <h2 className="join-team-title">Join Our Team</h2>
        <form className="join-team-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
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
            <select
              name="division"
              value={form.division}
              onChange={handleChange}
              required
            >
              <option value="">Business Division</option>
              {businessDivisions.map((div, idx) => (
                <option value={div} key={idx}>{div}</option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <textarea
              name="comments"
              placeholder="Comments (Optional)"
              value={form.comments}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <button type="submit" className="join-team-submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default JoinTeam;
