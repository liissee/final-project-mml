import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
// import { movies } from "../reducers/movies"
import {
  Button, ButtonRating, ButtonWatch, Heading, Wrapper, WrapperWelcome,
  WrapperWelcomeBox, RatingButtonContainer, WelcomeMovieRow, MovieTitle,
} from "./Styling";
import { Navbar } from './Navbar'

const url = "http://localhost:8080/secrets";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// const userId = "5e5938a8ce751dfff42ce512"

export const Welcome = props => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([])
  // const category = useSelector((state) => state.movies.chosenCategory)
  const [rate, setRate] = useState("")
  // const [watchStatus, setWatchStatus] = useState("")

  //Getting the accessToken from the browser's localStorage
  //and sending it as the header "Authorization"
  const accessToken = window.localStorage.getItem("accessToken");
  const userId = window.localStorage.getItem("userId")

  // function that will be invoced when the user rates a movie, i.e. 
  // when the user clicks on a rating button
  // this value should be sent to our own API with PUT or POST somehow
  const handleRating = (movieId, movieTitle, rating) => {
    setRate(rating)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ movieId, movieTitle, rating }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }

  // function that will be invoced when the user clicks on "Re watch", "Watched" etc.
  // we should discuss what code to add in body: JSON - we should send the status to our API
  const handleWatchStatus = (movieId, movieTitle, watchStatus) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ movieId, movieTitle, watchStatus }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }

  console.log("hej igen") /// WHY 3 TIMES? and why when click on rating buttons

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
    <Navbar />
    <WrapperWelcome>
      {message && (
        <WrapperWelcomeBox>
          <Heading>You're logged in!</Heading>
          <Heading>{message}</Heading>
          <p>To get started, here's a list of popular movies you can rate to get started</p>
          <section className="movies-list">

            {movies.map((movie) => (
              <WelcomeMovieRow
                key={movie.id}
              >
                <Link to={`movies/${movie.id}`}>
                  <MovieTitle>{movie.title}</MovieTitle>
                </Link>
                <RatingButtonContainer>
                  <ButtonRating onClick={(e) => handleRating(movie.id, movie.title, 1)}> 1 </ButtonRating>
                  <ButtonRating onClick={(e) => handleRating(movie.id, movie.title, 2)}> 2 </ButtonRating>
                  <ButtonRating onClick={(e) => handleRating(movie.id, movie.title, 3)}> 3 </ButtonRating>
                  <ButtonRating onClick={(e) => handleRating(movie.id, movie.title, 4)}> 4 </ButtonRating>
                  <ButtonRating onClick={(e) => handleRating(movie.id, movie.title, 5)}> 5 </ButtonRating>
                  <ButtonWatch onClick={(e) => handleWatchStatus(movie.id, movie.title, "rewatch")}> Rewatch </ButtonWatch>
                  <ButtonWatch onClick={(e) => handleWatchStatus(movie.id, movie.title, "watch")}> Watch </ButtonWatch>
                  <ButtonWatch onClick={(e) => handleWatchStatus(movie.id, movie.title, "notAgain")}> Not again</ButtonWatch>
                  <ButtonWatch onClick={(e) => handleWatchStatus(movie.id, movie.title, "no")}> No thanks</ButtonWatch>
                </RatingButtonContainer>
              </WelcomeMovieRow>
            ))}
          </section>
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
