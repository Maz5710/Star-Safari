import { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Learn = () => {

  const [learns, setLearns] = useState(null)
  const [loading, setLoading] = useState(true)

  const endpoint = `${baseUrl}/learn?_embed`

  console.log({endpoint}, {baseUrl});

  useEffect(() => {
      axios.get(`${endpoint}`)
      .then((res) => {
          console.log(res.data)
          setLearns(res.data)
          setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  function getFeaturedImage(learns) {
    if (learns && learns._embedded && learns._embedded['wp:featuredmedia'] && learns._embedded['wp:featuredmedia'][0].source_url) {
        return learns._embedded['wp:featuredmedia'][0].source_url;
        } else {
        return 'https://via.placeholder.com/150'
        }
    }

  const Learns = ({learns}) => {
    const mappedLearns = learns.map((learn, index) => {
        return (
          <div key={learn.slug} className="post-container">
          <img src={getFeaturedImage(learn)} alt="Post Featured Image"/>
          <a href={`#/learn/${learn.id}`}></a>
            <h4 className="title">{learn.acf.title}</h4>
            <p className="introduction">{learn.acf.introduction}</p>
            <p className="paragraph">{learn.acf.paragraph}</p>
        </div>             
        )
    })

    return (
      <>
          {mappedLearns}
      </>
  )
}
  return (
<>
  <Helmet>
    <title>Learn page</title>
    <meta name="Star Safari Articles" content="Articles from Star Safari" />
</Helmet>
    <div>
        <div id='hero-sub' className="hero-learn">
          <div className="hero-content">
              <h1>Learn with us</h1>
          </div>
        </div>

        <div className='section'>
                <h2>Our Mission</h2><br></br>
                <p>Our goal is to inspire people to think about our collective future and how they can actively contribute to it. </p><br />
                <p>We believe that quality science education with an added cosmic perspective can achieve that and should be available for everyone. </p>
            </div>

            <div className='flex-container'>
            <h2>See our latest articles</h2><br></br>
            <div id="learnsCont">
            {loading ? <p id='loading'>Chasing shooting stars...</p> : <Learns learns={learns}/>}
          </div>      
      </div>
    </div>
</>

  )
}

export default Learn
