import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Tours = () => {
  
  return (
    <>
      <div id='hero-sub' className="hero-tours">
          <div className="hero-content">
          <h1>Safari Tours, Courses and Events</h1>
        </div>
      </div>

      <div className='section'>
        <h2>Our Tours</h2><br></br>
            <p>Stargaze through large telescopes, use VR headsets for virtual tours, and engage in scientific discussions with expert guides Hari and Sam, offering an immersive and educational experience.</p><br />
      </div>

      <div>
          <hr className='horizontal-line'/>
        </div>

      <div className='section-product'>
        <h2>Night Sky Tour</h2><br></br>
            <h3>Price $30.00 per adult</h3>
            <p>Duration 90 minutes (approx)</p><br />
            <p>Embark on a celestial adventure in Wairarapa's awe-inspiring night skies, where top-tier telescopes and expert guides provide unrivalled stargazing experiences. Proudly operating from within the world's 21st Dark Sky Reserve, the Star Safari Observatory is nestled between Martinborough and Carterton, offering a perfect retreat from light pollution and revealing a dazzling array of celestial wonders.</p>
            <Link to="/shop"><button>BOOK NOW</button></Link> 
      </div>

      <div>
          <hr className='horizontal-line'/>
        </div>

      <div className='section-product'>
        <h2>Celestial Esacapades Tour</h2><br></br>
            <h3>Price $30.00 per adult</h3>
            <p>Duration 90 minutes (approx)</p><br />
            <p>Embark on a celestial adventure in Wairarapa's awe-inspiring night skies, where top-tier telescopes and expert guides provide unrivalled stargazing experiences. Proudly operating from within the world's 21st Dark Sky Reserve, the Star Safari Observatory is nestled between Martinborough and Carterton, offering a perfect retreat from light pollution and revealing a dazzling array of celestial wonders.</p>
            <Link to="/shop"><button>BOOK NOW</button></Link> 
      </div>

      <div>
          <hr className='horizontal-line'/>
        </div>

      <div className='section-product'>
        <h2>Star Party Group Tour</h2><br></br>
            <h3>Price $40.00 per adult</h3>
            <p>Duration 90 minutes (approx)</p><br />
            <p>Embark on a celestial adventure in Wairarapa's awe-inspiring night skies, where top-tier telescopes and expert guides provide unrivalled stargazing experiences. Proudly operating from within the world's 21st Dark Sky Reserve, the Star Safari Observatory is nestled between Martinborough and Carterton, offering a perfect retreat from light pollution and revealing a dazzling array of celestial wonders.</p>
            <Link to="/shop"><button>BOOK NOW</button></Link> 
      </div>

      <div>
          <hr className='horizontal-line'/>
        </div>

      <div className='section-product'>
        <h2>Virtual Reality Tour</h2><br></br>
            <h3>Price $30.00 per adult</h3>
            <p>Duration 90 minutes (approx)</p><br />
            <p>Embark on a celestial adventure in Wairarapa's awe-inspiring night skies, where top-tier telescopes and expert guides provide unrivalled stargazing experiences. Proudly operating from within the world's 21st Dark Sky Reserve, the Star Safari Observatory is nestled between Martinborough and Carterton, offering a perfect retreat from light pollution and revealing a dazzling array of celestial wonders.</p>
            <Link to="/shop"><button>BOOK NOW</button></Link> 
      </div>

      <div>
          <hr className='horizontal-line'/>
        </div>

      <div className='section-product'>
        <h2>Private Tour</h2><br></br>
            <h3>Price $30.00 per adult</h3>
            <p>Duration 90 minutes (approx)</p><br />
            <p>Embark on a celestial adventure in Wairarapa's awe-inspiring night skies, where top-tier telescopes and expert guides provide unrivalled stargazing experiences. Proudly operating from within the world's 21st Dark Sky Reserve, the Star Safari Observatory is nestled between Martinborough and Carterton, offering a perfect retreat from light pollution and revealing a dazzling array of celestial wonders.</p>
            <Link to="/shop"><button>BOOK NOW</button></Link> 
      </div>

      <div>
          <hr className='horizontal-line'/>
        </div>

      <div className='section'>
        <h2>Our Telescope Course</h2>
        <div id='images' className="about-telescope"></div>
      </div>

      <div className='section-product'>
        <h2>What to do with your telescope </h2><br></br>
            <h3>Price $80.00 per adult</h3>
            <p>Duration 3 hours (approx)</p><br />
            <p>This is a course for people who already have a telescope and would like to learn more about how to use it, how to collimate it and any other maintenance they need, what type of eyepieces are the best to buy and any other equipment. </p>
            <p>At the end of the course, you'll know all about the types of telescopes available, mounts, attachments and eyepieces. We cover the whole lot. We have been using telescopes for a long time and have a vast range we use now for public and at home. </p>
            <p>We're not affiliated with any retailers, so our advice is unbiased and based on our years of experience with lugging telescopes around the world, maintaining them and using them.</p>
            <Link to="/shop"><button>BOOK NOW</button></Link> 
      </div><br />

    </>

    

  )
}

export default Tours
