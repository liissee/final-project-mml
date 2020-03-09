import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Rating } from "./Rating"
// import { movies } from "../reducers/movies"
import {
  Button, ButtonRating, ButtonWatch, Heading, MovieTitle,
  RatingButtonContainer, WelcomeMovieRow, WrapperWelcome,
  WrapperWelcomeBox
} from "./Styling";
import { UserPage } from './UserPage'
const url = "http://localhost:8080/secrets";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// const userId = "5e5938a8ce751dfff42ce512"

export const Welcome = props => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([])



  //Getting the accessToken from the browser's localStorage
  //and sending it as the header "Authorization"
  const accessToken = window.localStorage.getItem("accessToken")
  const userId = window.localStorage.getItem("userId")


  useEffect(() => {
    setErrorMessage("");
    fetch(url, {
      method: "GET",
      headers: { Authorization: accessToken }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("You need to sign in to view this page", JSON);
        } else {
          return res.json();
        }
      })
      .then(json => setMessage(json.secret))
      .catch(err => {
        setErrorMessage(err.message);
      });
  }, [accessToken]);

  // Fetch movies from external API and setMovies to json.results
  // In our Welcome-page we want to render a list of top rated movies from the external API
  // that the logged-in user can rate
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      })
  }, [])

  // Below we should keep track of whether the movies have been rated by the user or not
  // For the first time a user logs in no movies have been rated, i.e. we will have for example
  // an empty array in our own API for our Use  rs, moviesWatched=[]
  // However, for the second time the user logs in the array might not be empty anymore
  // First we should get the code below to work for a first-time logged-in user but
  // if we get that to work a next step would be to keep track of the info. we have in our own API for that user

  return (
    <div>
      <WrapperWelcome>
        {message && (
          <WrapperWelcomeBox>
            <Heading>You're logged in!</Heading>
            <p>To get started, here's a list of popular movies you can rate to get started</p>
            <section className="movies-list">

              {movies.map((movie) => (
                <WelcomeMovieRow
                  key={movie.id}
                >
                  <Link to={`movies/${movie.id}`}>
                    <MovieTitle>{movie.title}</MovieTitle>
                  </Link>
                  <Rating movieId={movie.id} movieTitle={movie.title} />
                </WelcomeMovieRow>
              ))}
            </section>
            <UserPage />
          </WrapperWelcomeBox>
        )}
        <div>
          {errorMessage && <div>{errorMessage}</div>}
          <Button
            onClick={() => window.localStorage.removeItem("accessToken")}
            type="button"
          >
            <Link className="link-text" to={`/login`}>
              {errorMessage ? "Sign in" : "Log out"}
            </Link>
          </Button>
        </div>
      </WrapperWelcome >
    </div>
  );
};