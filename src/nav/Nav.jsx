import React from 'react'
import './nav.css'

const Nav = () => {


  

  return (
    <nav>
        <div className="nav-content">
            <div className="logo">
                <a href="/"><h2>K-Render UK</h2></a>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">Who We Are</a></li>
                <li><a href="/contact">Get A Quote</a></li>
            </ul>
        </div>


        <div className="mobile-nav">
        <ul>
          <li>
            <a href="/">
              <span className="label">Home</span>
            </a>
          </li>
          <li>
            <a href="/services">
              <span className="label">Services</span>
            </a>
          </li>
          <li>
          <a href="/about">
              <span className="label">About Us</span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className="label">Get A Quote</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
