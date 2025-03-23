import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Get database reference
      const db = getDatabase();
      const contactsRef = ref(db, 'contacts');

      // Add timestamp to form data
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString()
      };

      // Push data to Firebase
      await push(contactsRef, submissionData);

      // Reset form and show success message
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    }
  };

  return (
    <main className="main-wrapper">
      <div className="contact-hero">
        <div className="contact-container">
          <div className="contact-info">
            <h1>Get in Touch</h1>
            <p>Have a project in mind? Let's work together to bring your vision to life. Fill out the form and we'll get back to you as soon as possible.</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="K-Rendering">K-Rendering</option>
                <option value="External Plastering">External Plastering</option>
                <option value="Colored Rendering">Colored Rendering</option>
                <option value="Interior Plastering">Interior Plastering</option>
                <option value="Other">Other Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>

            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="success-message">Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="error-message">Failed to send message. Please try again.</div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
