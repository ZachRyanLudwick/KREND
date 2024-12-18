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
          <h3>Where We Operate</h3>
          <p>We operate everywher in the UK serving professional rendering services</p>
          <p>Available for both residential and commercial projects</p>
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