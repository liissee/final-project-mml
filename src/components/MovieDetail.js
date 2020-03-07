import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ButtonRating, ButtonWatch, Genre, MovieBackground,  
  MovieDetailGenres, MovieDetailRow, MovieImdb, MovieInfo, 
  MovieRating, MovieTitle, MovieOverview, RatingButtonContainerDetail, 
  ShowSimilar, WrapMovie, WrapMovieInfo, YourRating
} from "./Styling";
import { Navbar } from './Navbar'
// Import what we need to use

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// Fetch data from API with a GET request using e.g. :movieId
// Show movie details: poster, story overview, casting, rating etc.
export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [rate, setRate] = useState("")

  const accessToken = window.localStorage.getItem("accessToken");
  const userId = window.localStorage.getItem("userId")

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

  const handleRating = (userId, movieId, movieTitle, rating) => {
    setRate(rating)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, rating }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }

  const handleWatchStatus = (userId, movieId, movieTitle, watchStatus) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, watchStatus }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }


  // Maybe also add genres and actors below
  return (
    <MovieBackground
      key={id}
    >
    <Navbar />
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
        <MovieRating>⭐️ {movie.vote_average/2} / 5</MovieRating>
      </WrapMovie>
      <YourRating>Rate this movie</YourRating>
      <RatingButtonContainerDetail>
        <ButtonRating onClick={(e) => handleRating(userId, movie.id, movie.title, 1)}> 1 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movie.id, movie.title, 2)}> 2 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movie.id, movie.title, 3)}> 3 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movie.id, movie.title, 4)}> 4 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movie.id, movie.title, 5)}> 5 </ButtonRating>
        <ButtonWatch onClick={(e) => handleWatchStatus(userId, movie.id, movie.title, "rewatch")}> Rewatch </ButtonWatch>
        <ButtonWatch onClick={(e) => handleWatchStatus(userId, movie.id, movie.title, "watch")}> Watch </ButtonWatch>
        <ButtonWatch onClick={(e) => handleWatchStatus(userId, movie.id, movie.title, "notAgain")}> Not again</ButtonWatch>
        <ButtonWatch onClick={(e) => handleWatchStatus(userId, movie.id, movie.title, "no")}> No thanks</ButtonWatch>
      </RatingButtonContainerDetail>
      <section className="similar-movies">
        <Link to={`/similar/${movie.id}`} >
          <ShowSimilar>Show similar movies</ShowSimilar>
        </Link>
      </section>
    </MovieBackground>
  )
}