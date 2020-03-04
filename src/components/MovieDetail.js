import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Button, Heading, Wrapper, RatingButtonContainer
} from "./Styling";
// import { Navbar } from './Navbar'
// Import what we need to use

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// Fetch data from API with a GET request using e.g. :movieId
// Show movie details: poster, story overview, casting, rating etc.
export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status.code === 34) {
          setError("Movie not found")
        } else {
          setMovie(json)
          console.log(json)
        }
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="loading-message">Movie page is loading...</div>
    )
  }

  if (!movie.title) {
    return (
      <div>{error}</div>
    )
  }

  // Maybe also add genres and actors below
  return (
    <div
      key={id}
      className="background-container"
    >
      {!movie.poster_path && (
        <p>Lägg in placeholder</p>
      )}
      {movie.poster_path && (
        <img
          className="movie-detail-image"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}
        />
      )}

      <h1 className="movie-detail-title">{movie.title}</h1>
      <h3 className="movie-detail-rating">{movie.vote_average}</h3>
      <h4 className="movie-detail-overview">{movie.overview}</h4>

      <a
        className="imdb-link"
        href={`https://www.imdb.com/title/${movie.imdb_id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        IMDb page
      </a>

      <section className="similar-movies">
        <Link to={`/similar/${movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
          Show similar movies
        </Link>
      </section>
    </div>
  )
}