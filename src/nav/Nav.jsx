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
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
