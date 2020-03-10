import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Genre, MovieBackground,
  MovieDetailGenres, MovieDetailRow, MovieImdb, MovieInfo,
  MovieRating, MovieTitle, MovieOverview, RatingMovieWrap,
  ShowSimilar, WrapMovie, WrapMovieInfo, YourRating
} from "./Styling";
import { Navbar } from './Navbar'
import { Rating } from './Rating';
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
    <MovieBackground
      key={id}
    >
      {!movie.poster_path && (
        <p>Lägg in placeholder</p>
      )}

      <WrapMovie>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title}
          />
        )}
        <WrapMovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetailGenres>
            {movie.genres.map((genre) => (
              <Genre key={genre.name}>{genre.name}</Genre>
            ))}
          </MovieDetailGenres>
          <MovieOverview>{movie.overview}</MovieOverview>
          <MovieDetailRow>
            <MovieInfo>⏲ {movie.runtime} min</MovieInfo>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MovieImdb>IMDb</MovieImdb>
            </a>
          </MovieDetailRow>
        </WrapMovieInfo>
        <MovieRating>⭐️ {movie.vote_average / 2} / 5</MovieRating>
      </WrapMovie>
      <YourRating>Rate this movie</YourRating>
      <RatingMovieWrap>
        <Rating movieId={movie.id} />
      </RatingMovieWrap>

      <section className="similar-movies">
        <Link to={`/similar/${movie.id}`} >
          <ShowSimilar>Show similar movies</ShowSimilar>
        </Link>
      </section>
    </MovieBackground>
  )
}