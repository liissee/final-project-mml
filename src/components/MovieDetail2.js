import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MovieCard, MovieCardInfo, MovieCardOverview, MovieCardTitle,
  MovieDetailRow, MovieImage, MovieTags, WrapMovieCard, WrapMovieCardInfo
} from "./Styling";
import { Ratings } from './Ratings';
import { movies } from '../reducers/movies'

// Import what we need to use

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// Fetch data from API with a GET request using e.g. :movieId
// Show movie details: poster, story overview, casting, rating etc.
export const MovieDetail2 = ({ id }) => {
  const [movie, setMovie] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        // if (json.status.code === 34) {
        //   setError("Movie not found")
        // } 
        // else {
        setMovie(json)
        // }
        setLoading(false)
      })
  }, [id])
  // console.log(movie)


  if (loading) {
    return (
      <div className="loading-message">Movie page is loading...</div>
    )
  }

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

  const cutOutDate = (date) => {
    return date.substring(0, 4)
  }

  return (
    <MovieCard
      key={id}
    >
      {!movie.poster_path && (
        <p>Lägg in placeholder</p>
      )}

      <WrapMovieCard>
        {movie.poster_path && (
          <MovieImage
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title}
          />
        )}
        <WrapMovieCardInfo>
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCardTitle>{movie.title}</MovieCardTitle>
          </Link>
          <Ratings movieId={movie.id}
            movieTitle={movie.title}
            movieImage={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          <MovieTags>
            <MovieCardInfo>
              <Link
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >IMDb</Link>
            </MovieCardInfo>
            <MovieCardInfo>| {cutOutDate(movie.release_date)} |</MovieCardInfo>
            <MovieCardInfo>{movie.runtime} min </MovieCardInfo>
          </MovieTags>
          <MovieCardOverview>{movie.overview}</MovieCardOverview>
          <MovieDetailRow>
          </MovieDetailRow>
        </WrapMovieCardInfo>
      </WrapMovieCard>
    </MovieCard>
  )
}