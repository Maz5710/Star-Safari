import React from 'react'

import Telescope from '/assets/about-telescope.png'
import Educators from '/assets/about-hariandsam.png'

const About = () => {
  return (
    <div>
        <div id='hero-sub' className="hero-about">
          <div className="hero-content">
              <h1>About Star Safari</h1>
          </div>
        </div>

        <div className='section'>
          <h3>At Star Safari, our mission is to make the wonders of the night sky accessible to everyone. Located in one of the best stargazing spots in New Zealand, we offer a range of unforgettable experiences.</h3><br />
        </div>

        <div>
          <hr className='horizontal-line'/>
        </div>

        <div className='section'>
          <h2>Observatory perched on a hill</h2><br></br>
            <h3>Our observatory is situated atop a picturesque hill, providing optimal viewing conditions for observing phenomena in the New Zealand sky. </h3><br />
            <p>Whether you're gazing through our refractor or reflector telescopes, you'll witness the celestial wonders in all their glory.</p><br />
        </div>

        <div id='images' className="about-telescope"></div>

        <div className='section'>
          <h2>Accessible and affordable Stargazing for all</h2><br></br>
          <h3>We are committed to providing affordable access to our stargazing experiences. </h3><br />
            <p>We understand that cost should not be a barrier to witnessing the wonders of the universe.</p>
            <p>We strive to create an inclusive environment for all visitors.</p>
        </div>
      
        <div>
          <hr className='horizontal-line'/>
        </div>

        <div className='section'>
          <h2>Professional Space Sciences Educators</h2><br></br>
            <h3>At Star Safari, our team consists of accredited space sciences educators. </h3><br />
              <p>Recognised by the Ministry of Education as Professional Learning Development (PLD) providers for teachers. Your knowledgeable experts will guide you through the mysteries of the cosmos, enhancing your understanding and appreciation of the universe. </p><br />
              <div id='educators'><img src={Educators}/>
              </div>
            </div>

            {/* <div id='images' className="about-educators"></div> */}

            <div className='section'>
              <h3>Haritina Mogoșanu - Astrobiologis</h3>
              <p>Hari  is a TEDx featured astrobiologist, has done an internship at NASA Ames, trained for Mars as an analog astronaut and established the New Zealand Astrobiology Network.</p><br />
              <h3>Samuel  Leske - Space Sciences Educator</h3>
              <p>Sam loved space since he was a kid and enjoyed getting closer to it as an airforce pilot. He is currently studying for a Masters in Astrophysics.</p><br />
            </div>

        
    </div>

    


  )
}

export default About
