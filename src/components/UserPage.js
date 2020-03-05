import React, { useState, useEffect } from 'react'
import { Wrapper, WelcomeMovieRow, Heading } from "./Styling"
import { Link } from 'react-router-dom'
// Import what we need to use

// Fetch data with a GET request to our MongoDB database for an individual user 
export const UserPage = () => {
  const [movies, setMovies] = useState([])
  const userId = window.localStorage.getItem("userId")

  // We need to create an app.get-route in the backend for ratedMovies
  // Also we should think about how to fetch data from another user, randomly
  // choosing an id in our database
  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/movies`)
      .then(res => res.json())
      .then(json => {
        setMovies(json)
        console.log(json)
      })
  }, [])

  return (
    <Wrapper>
      <Heading>Welcome!</Heading>
      <p>Here is a list of the movies that you have rated</p>
      <section className="movies-list">

        {movies.map((movie) => (
          <WelcomeMovieRow
            key={movie.date}
          >
            <Link to={`movies/${movie.movieId}`}>
              <h2 className="movie-title">{movie.movieTitle}</h2>
              <p>Rating: {movie.score}</p>
              <p>Status:{movie.status}</p>
            </Link>
          </WelcomeMovieRow>
        ))}
      </section>
    </Wrapper >
  );
};