import {useEffect, useState, useMemo} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {ArrowLeft} from 'react-bootstrap-icons'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const GenreName = ({genre}) => {
    return (
        <>
            <h2>All Articles</h2>
            <h3>Genre: {genre.name}</h3>
        </>
    )
}

const AllLearnInGenre = ({params}) => {
    const [learn, setLearn] = useState([]);
    const endpoint = `${baseUrl}/learn?genre=${params.id}&_embed`
    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setLearn(res.data)
        })
        .catch((err) => console.log(err))
    }, [endpoint])

    const renderedLearn = learn.map((learn, index) => {
        return (
            <div className="learn-container item-container" key={index}>
                <Link className="learn-link" to={`/learn/${learn.id}`} >
                    <img src={learn._embedded['wp:featuredmedia']['0'].source_url} alt={learn.title.rendered} />
                    <h4 className="title">{learn.acf.title}</h4>
                </Link>
            </div>

        )
    })
    // Return for all Learn items in genre
    return (
        <>
            {renderedLearn}
        </>
    )
}

const LearnViaGenres = () => {
    const [genre, setGenre] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const genreEndpoint = `${baseUrl}/genre/${params.id}`
    useEffect(() => {
        axios.get(`${genreEndpoint}`)
        .then((res) => {
            setGenre(res.data)
        })
        .catch((err) => console.log(err))
    }, [genreEndpoint])

    return (
        <div id="learn-via-genre" className="page-container">
            <button onClick={() => navigate(-1)}><ArrowLeft/>Go Back</button>
            <GenreName genre={genre}/>
            <div id="learn-grid" className="grid-container">
                <AllLearnInGenre params={params}/>
            </div>
        </div>
    )
}

export default LearnViaGenres
