import movies from '../data'
import { Link } from 'react-router-dom'
import './Movies.css'
import { useState } from 'react'

const Movies = () => {


const[displayMovies, setDisplayMovies] = useState(movies)


const onChangeHandler = (inputText) => {
  const filteredMovies  = movies.filter((oneMovie) => {
    return oneMovie.title.toLowerCase().includes(inputText.toLowerCase())
  })
  setDisplayMovies(filteredMovies)
  }

  return <section>
    <div className='search-box'>
      <input type="text" onChange={(even) =>
          onChangeHandler(even.target.value)
      }/>
    </div>

    <div className="all-movies">
        {
           displayMovies.map((oneMovie) => {
                const{id, title, image} = oneMovie

                return <article key={id} className="one-movie">
                    <h2>{title}</h2>
                    <img src={image} alt="" /><br />
                    <Link to={`/all-movies/${id}`}>Více informací</Link>
                </article>
            })
        }
    </div>
  </section>
}

export default Movies


