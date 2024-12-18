import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                <option value="krendering">K-Rendering</option>
                <option value="external">Extermal Plastering</option>
                <option value="colored">Colored Rendering</option>
                <option value="interior">Interior Plastering</option>
                <option value="other">Other Enquiry</option>
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

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact  // Changed from 'contact' to 'Contact'
