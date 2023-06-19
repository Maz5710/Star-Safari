import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'
import MobileMenu from '../components/MobileMenu'
import logo from '/assets/starsafari_logo.png'

const Header = () => {

    const [menuIsOpen, openMenu] = useState(false);

    const toggleMobileMenu =() => {
        openMenu(!menuIsOpen);
        document.body.classList.toggle('no-scroll');
    }

  return (
    <>
      <div id='topnav'>
        <div id='header-logo'>
          <Link to="/"><img src={logo}/></Link>
        </div>

        {/* Desktop Menu */}
        <ul id='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop"><button id='topnav-button'>BOOK NOW</button></Link> 
          </li>
        </ul>
               
        {/* HMenu Icon */}
        <div id='menu-containter'>
          <button id='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id='hamburger-icon'/>
          </button>
        </div>
      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </>
  )
}

export default Header
