/**
 * Frontend Integration Examples
 * 
 * This file contains examples of how to integrate the React frontend
 * with the backend API endpoints.
 */

// Example: Contact Form Submission
const submitContactForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Contact form submitted successfully:', result);
      return { success: true, data: result };
    } else {
      console.error('❌ Contact form submission failed:', result);
      return { success: false, error: result.message };
    }
  } catch (error) {
    console.error('❌ Network error:', error);
    return { success: false, error: 'Network error occurred' };
  }
};

// Example: Job Application with CV Upload
const submitJobApplication = async (formData) => {
  try {
    // Create FormData object for file upload
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('contact', formData.contact);
    data.append('division', formData.division);
    data.append('comments', formData.comments);
    data.append('cv', formData.cv); // File object

    const response = await fetch('http://localhost:5000/api/join-us', {
      method: 'POST',
      body: data // Don't set Content-Type header for FormData
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Job application submitted successfully:', result);
      return { success: true, data: result };
    } else {
      console.error('❌ Job application submission failed:', result);
      return { success: false, error: result.message };
    }
  } catch (error) {
    console.error('❌ Network error:', error);
    return { success: false, error: 'Network error occurred' };
  }
};

// Example: Ebook Download Request
const submitEbookDownload = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/ebook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Ebook download request submitted successfully:', result);
      return { success: true, data: result };
    } else {
      console.error('❌ Ebook download request failed:', result);
      return { success: false, error: result.message };
    }
  } catch (error) {
    console.error('❌ Network error:', error);
    return { success: false, error: 'Network error occurred' };
  }
};

// Example: React Component Integration
const ContactFormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    division: '',
    comments: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const result = await submitContactForm(formData);

    if (result.success) {
      setMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', contact: '', division: '', comments: '' });
    } else {
      setMessage(`Error: ${result.error}`);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

// Example: Job Application Component
const JobApplicationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    division: '',
    comments: '',
    cv: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const result = await submitJobApplication(formData);

    if (result.success) {
      setMessage('Thank you for your application! We will review your CV and get back to you soon.');
      setFormData({ name: '', email: '', contact: '', division: '', comments: '', cv: null });
    } else {
      setMessage(`Error: ${result.error}`);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

// Example: Ebook Download Component
const EbookDownloadExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ebookTitle: 'The Sales Blueprint'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const result = await submitEbookDownload(formData);

    if (result.success) {
      setMessage('Thank you! Your ebook download link has been sent to your email.');
      setFormData({ name: '', email: '', phone: '', ebookTitle: 'The Sales Blueprint' });
    } else {
      setMessage(`Error: ${result.error}`);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Download Ebook'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

// Export functions for use in React components
module.exports = {
  submitContactForm,
  submitJobApplication,
  submitEbookDownload
}; 