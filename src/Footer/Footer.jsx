import React from 'react'
import './footer.css'

const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>K-Render UK</h3>
        <p>The UK's Finest In Professional Rendering</p>
        <div className="contact-info">
          <p>📱 Phone: [Your Phone Number]</p>
          <p>✉️ Email: info@krender.co.uk</p>
        </div>
      </div>

      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li>K-Rendering</li>
          <li>External Plastering</li>
          <li>Colored Rendering</li>
          <li>Interior Plastering</li>
          <li>Commercial Rendering</li>
          <li>Maintenance & Repair</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Service Areas</h3>
        <p>Serving the UK with professional rendering services</p>
        <p>Available for both residential and commercial projects</p>
      </div>

      <div className="footer-section">
        <h3>Connect With Us</h3>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} K-Render UK. All rights reserved.</p>
      <p className='text-right'>Designed By <a href="https://github.com/ZachRyanLudwick">APEX Ltd.</a></p>
    </div>
  </footer>
  )
}

export default Footer
