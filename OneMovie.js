import './OneMovie.css'
import { useParams } from 'react-router-dom'
import movies from '../data'
import { Link } from 'react-router-dom'


const OneMovie = () => {

const {movieId} = useParams()
// useParams je hook, objekt, který je tvořen názvem parametru a jeho hodnotou

const oneSpecificMovie = movies.find((oneMovie) => {
  return oneMovie.id === parseInt(movieId)
})
// potřebuješ vrátit, vždy jen jeden film, tak použiješ metodu find

const { image, title, description, tags } = oneSpecificMovie


  return <section className="one-movie-box">
    <h2>{title}</h2>
    <img src={image} alt="" />
    <p>{description}</p>
    <p>{tags}</p>
    <Link to='/movies'>Zpět na všechny filmy</Link>
  </section>
}

export default OneMovie