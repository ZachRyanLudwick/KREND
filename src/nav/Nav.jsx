import React from 'react'
import './nav.css'

const Nav = () => {

  return (

    <nav>
        <div className="nav-content">
            <div className="logo">
                <a href="/"><h2>K-Render UK</h2></a>
            </div>
            <ul className='nav-links'>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Who We Are</a></li>
                <li><a href="">Get A Quote</a></li>
            </ul>
            <div class="mobile-menu-btn">
              <span>Home</span>
              <span>Services</span>
              <span>Who Are We</span>
              <span>Get A Quote</span>
          </div>
        </div>
    </nav>
  )
}

export default Nav
