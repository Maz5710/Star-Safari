import { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet }  from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(null)

  const endpoint = `${baseUrl}/posts?_embed`

  console.log({baseUrl}, {endpoint});
    
      useEffect(() => {
          axios.get(`${endpoint}`)
          .then((res) => {
              console.log(res.data);
              setPosts(res.data)
              setLoading(false)
          })
          .catch((err) => console.log(err))
      }, [])


      function getFeaturedImage(post) {
        if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
            return post._embedded['wp:featuredmedia'][0].source_url;
            } else {
            return 'https://via.placeholder.com/150'
            }
        }

      const Posts = ({ posts }) => {
        const mappedPosts = posts.map((post, index) => {
            return (
                <div key={post.slug} className="post-container">
                <img src={getFeaturedImage(post)} alt="Post Featured Image"/>
                <a href={`#/post/${post.id}`}><button>BOOK NOW</button></a>
                  <h4 className="title">{post.acf.title}</h4>
                  <p className="price">{post.acf.price}</p>
                  <p className="duration">{post.acf.duration}</p>
                  <p className="description">{post.acf.description}</p>
              </div>            
            )
        })

    return (
        <>
            {mappedPosts}
        </>
        )
    }

    return (
        <>
        <Helmet>
            <title>Home page</title>
            <meta name="Star Safari Products" content="Book Star Safari tours" />
        </Helmet>
        <div>
            <div className="hero">
                <div className="hero-content">
                    <h1>Journey to the stars</h1>
                    <h3>Unleash the magic of stargazing in Wairarapa</h3><br />
                    <button id='hero-button'>BOOK <br/>YOUR EXPERIENCE <br /> NOW</button>
                </div>
            </div>

            <div className='feedback'>
            <h2>Feedback</h2><br></br>
                <p><span id='left-quote'><FontAwesomeIcon icon={faQuoteLeft} /></span> Thanks Sam and Hari for creating an extraordinary place of learning! Discovered our Goldilocks planet, explored gravity, tides, Big Bang, galaxies, nebulae, ancient civilizations. Your passion sparked a fire in me. Grateful for this journey!<span id='right-quote'><FontAwesomeIcon icon={faQuoteRight} /></span></p>
            </div>

            <div>
                <hr className='horizontal-line'/>
            </div>

            <div className='section'>
                <h2>Safari Tours</h2><br></br>
                <p>Embark on an astronomical adventure with premier telescope equipment, discover New Zealand’s celestial wonders in the Wairarapa Dark Sky Reserve.</p><br />
                <p>Stargaze, look through our telescopes, take photos of the night sky, learn about astronomy or simply come with us for a virtual trip to the edge of the Cosmos if the weather is cloudy. </p>
            </div>

            <div id='tours'>
                <div className='flex-container'>
                <div id='product-grid' className='grid-container'>
                    <div id="homeCont"> {loading ? <p id='loading'>Wish upon a star...</p> : <Posts posts={posts} />}
                    </div>
                    </div>
                </div>
            </div>

        </div>          
                
        </>
        )
    }

export default Home
