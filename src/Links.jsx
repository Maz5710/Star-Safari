import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Import Components
import Learns from './components/Learns'
import Post from './components/Post'


// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Tours from './pages/Tours'
import Learn from './pages/Learn'
import Contact from './pages/Contact'
import Shopfront from './pages/shop/Shopfront'
import Product from './pages/shop/Product'
import LearnViaGenres from './pages/LearnViaGenres'


const Links = () => {
  return (
      <Routes>
        {/* COMPONENTS */}
        <Route path="/post/:id" element={<Post />}/>
        <Route path="/learns/:id" element={<Learns />}/>

        {/* PAGES */}
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/tours" element={<Tours />}/>
        <Route path="/learn" element={<Learn />}/>
        <Route path="/learnviagenres" element={<LearnViaGenres />}/>        

        {/* SHOP PAGES */}
        <Route path="/shop" element={<Shopfront />}/>
        <Route path="/product/:id" element={<Product />}/>        
      </Routes>
  )
}

export default Links
