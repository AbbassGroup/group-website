import React, { useState } from 'react';
import './EbookDownloadModal.css';

const EbookDownloadModal = ({ open, onClose, ebook }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  if (!open || !ebook) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic here
  };

  return (
    <div className="ebook-modal-overlay">
      <div className="ebook-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="ebook-modal-content">
          <div className="ebook-modal-left">
            <img src={ebook.image} alt={ebook.title} className="ebook-modal-cover" />
          </div>
          <div className="ebook-modal-right">
            <h2>Download free e-Book</h2>
            <p className="ebook-modal-desc">{ebook.description || 'Download your free guide and learn how to start your journey with ABBASS.'}</p>
            <form className="ebook-modal-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
              <button type="submit" className="modal-download-btn">Download now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookDownloadModal; 