import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/assets/starsafari_logo.png'

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    }

  return (
    <footer id='footer'>
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <form onSubmit={handleSubscribe}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

        <div class="social-icons">
                        <a href="https://github.com/Maz5710"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/mazarnot/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>

      <nav className="menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tours">Tours</a>
          </li>
          <li>
            <a href="/learn">Learn</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div id='logo-img-footer'>
          <Link to="/"><img id='logo-footer' src={logo}/></Link>
        </div>
        <p id='copyright'>© Star Safari 2023</p>
    </footer>
  )
}

export default Footer;


