import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'react-bootstrap-icons'


const MobileMenu = ({ closeMethod }) => {
    return (
      <>
        <button id="close-nav-menu" onClick={closeMethod}><X />
        </button>

          <ul id='mobile-menu'>
              <li>
                  <Link to="/" onClick={closeMethod}>Home</Link>
              </li>
              <li>
                  <Link to="/about" onClick={closeMethod}>About</Link>
              </li>
              <li>
                  <Link to="/tours" onClick={closeMethod}>Tours</Link>
              </li>
              <li>
                  <Link to="/learn" onClick={closeMethod}>Learn</Link>
              </li>
              <li>
                  <Link to="/contact" onClick={closeMethod}>Contact</Link>
              </li>
              <li>
                <Link to="/shop" onClick={closeMethod}><button id='mobile-button'>BOOK NOW</button></Link>
              </li>
          </ul>
      </>
          )
  }

export default MobileMenu
