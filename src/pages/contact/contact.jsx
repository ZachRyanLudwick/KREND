import React, { useState } from 'react'
import './contact.css'


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
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api-j2f6l27txq-uc.a.run.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if(response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error)
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
  )
}

export default Contact 
