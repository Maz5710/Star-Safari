import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

//Import baseUrl env
const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Learns = () => {
    const [learn, setLearn] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    const endpoint = `${baseUrl}/learns/${id}?_embed`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            console.log(res.data);
            setLearn(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [id])

    //Check for featured or render placeholder
    function getFeaturedImage(learn) {
        if (learn && learn._embedded && learn._embedded['wp:featuredmedia'] && learn._embedded['wp:featuredmedia'][0].source_url) {
            return learn._embedded['wp:featuredmedia'][0].source_url;
        } else {
            return 'https://via.placeholder.com/150'
        }
    } 

    if (loading) {
        return <>Loading...</>
    }

  return (
    <div className='flex-container'>
      <h2>Article Information</h2>
      <div key={learn.slug} className="learn-container">
        <img src={getFeaturedImage(learn)} alt="Article Featured Image"/>
        <a href={`#/learn/${learn.id}`}><button>Discover more</button></a>
          <h4 className="title">{learn.acf.title}</h4>
          <p className="introduction">{learn.acf.introduction}</p>
          <p className="description">{learn.acf.description}</p>
      </div>
    </div>
  )
}

export default Learns

