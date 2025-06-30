import React, { useState } from 'react';
import './EbookDownloadModal.css';

const HOSTNAME = process.env.REACT_APP_HOSTNAME || 'localhost';
const PORT = process.env.REACT_APP_PORT || 5000;
const API_URL = process.env.REACT_APP_API_URL || 'https://apigroup.abbass.com.au';
const EbookDownloadModal = ({ open, onClose, ebook }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  if (!open || !ebook) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const downloadPDF = async (downloadUrl) => {
    try {
      const response = await fetch(`${API_URL}${downloadUrl}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = ebook.pdfFile || `${ebook.title}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/api/ebook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          ebookTitle: ebook.title,
          ebookType: 'general' // You can customize this based on ebook type
        })
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Thank you! Your ebook is downloading now.');
        setMessageType('success');
        
        // Reset form
        setForm({ name: '', email: '', phone: '' });
        
        // Trigger PDF download
        if (result.data && result.data.downloadUrl) {
          await downloadPDF(result.data.downloadUrl);
        }
        
        // Hide message and close modal after 3 seconds
        setTimeout(() => {
          setMessage('');
          setMessageType('');
          onClose();
        }, 3000);
      } else {
        setMessage(result.message || 'Something went wrong. Please try again.');
        setMessageType('error');
        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting ebook download:', error);
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
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                disabled={loading}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={form.email} 
                onChange={handleChange} 
                required 
                disabled={loading}
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone" 
                value={form.phone} 
                onChange={handleChange} 
                required 
                disabled={loading}
              />
              <button 
                type="submit" 
                className="modal-download-btn"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Download now'}
              </button>
              
              {/* Message Display */}
              {message && (
                <div className={`modal-message ${messageType}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookDownloadModal; 
