import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Post = () => {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    const endpoint = `${baseUrl}/posts/${id}?_embed`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            console.log(res.data);
            setPost(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [id])

      function getFeaturedImage(post) {
        if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
            return post._embedded['wp:featuredmedia'][0].source_url;
        } else {
            return 'https://via.placeholder.com/150'
        }
    } 

    if (loading) {
        return <>Loading...</>
    }

  return (
    <div className='product-container'>
      <h2>Event Information</h2>
      <div key={post.slug} className="post-container">
        <img src={getFeaturedImage(post)} alt="Post Featured Image"/>
        <a href={`#/post/${post.id}`}><button>BOOK NOW</button></a>
          <h4 className="title">{post.acf.title}</h4>
          <p className="price">{post.acf.price}</p>
          <p className="duration">{post.acf.duration}</p>
          <p className="description">{post.acf.description}</p>
      </div>
    </div>
  )
}

export default Post
