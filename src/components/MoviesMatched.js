import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Ratings } from './Ratings'
import { WatchStatus } from './WatchStatus'
import {
  ImdbLink, MovieCard, MovieCardInfo, MovieCardTitle, MovieTags,
  RatingsText, StyledMovieImage, StyledRatings,
  WrapMovieCard, WrapMovieCardInfo
} from './Styling'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


export const MoviesMatched = ({ id }) => {
  const [movie, setMovie] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const cutOutDate = (date) => {
    return date.substring(0, 4)
  }

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div>Movie page is loading...</div>
    )
  }

  if (!movie.title) {
    return (
      <div>{error}</div>
    )
  }


  return (
    <MovieCard
      key={id}
    >
      <WrapMovieCard>
        {movie.poster_path && (
          <StyledMovieImage
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title}
          />
        )}
        {!movie.poster_path && (
          <StyledMovieImage
            src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Photo by Denise Jans on Unsplash" />
        )}
        <WrapMovieCardInfo>
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCardTitle>{movie.title}</MovieCardTitle>
          </Link>
          <StyledRatings>
            <RatingsText>Your rating:</RatingsText>
            <Ratings
              movieId={movie.id}
              movieTitle={movie.title}
              movieImage={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            />
          </StyledRatings>
          <RatingsText></RatingsText>
          <RatingsText></RatingsText>
          <WatchStatus
            movieId={movie.id}
            movieTitle={movie.title}
          />
          <MovieTags>
            <MovieCardInfo>
              {movie.imdb_id && (
                <ImdbLink
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >IMDb</ImdbLink>
              )}
            </MovieCardInfo>
            <MovieCardInfo>| {cutOutDate(movie.release_date)} |</MovieCardInfo>
            <MovieCardInfo>{movie.runtime} min </MovieCardInfo>
          </MovieTags>
        </WrapMovieCardInfo>
      </WrapMovieCard>
    </MovieCard>
  )
}