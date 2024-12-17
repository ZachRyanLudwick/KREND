import React from 'react'
import './nav.css'

const Nav = () => {

  const toggleMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
  };
  

  return (
    <nav>
        <div className="nav-content">
            <div className="logo">
                <a href="/"><h2>K-Render UK</h2></a>
            </div>
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Who We Are</a></li>
                <li><a href="">Get A Quote</a></li>
            </ul>
        </div>
        <div className="mb-nav">
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
    </nav>
  )
}

export default Nav
