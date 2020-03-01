import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Wrapper } from "./Styling";

const url = "http://localhost:8080/secrets";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// userId = 5e5938a8ce751dfff42ce512

export const Welcome = props => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([])
  const [movieList, setMovieList] = useState("top_rated")
  // use movie_url below in fetch, entering an api_key - set as env.variable?

  // const movie_url = https://api.themoviedb.org/3/movie/${movieList}?api_key=<enter key>&language=en-US&page=1

  const [rating, setRating] = useState("")
  //Getting the accessToken from the browser's localStorage
  //and sending it as the header "Authorization"
  const accessToken = window.localStorage.getItem("accessToken");
  const userId = window.localStorage.getItem("id")

  // function that will be invoced when the user rates a movie, i.e. 
  // when the user clicks on a rating button
  // this value should be sent to our own API with PUT or POST somehow
  // we should discuss what code to add in body: JSON - we should send the score to our API
  const handleRating = (score) => {
    setRating(score)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON,
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }

  // function that will be invoced when the user clicks on "Re watch", "Watched" etc.
  // we should discuss what code to add in body: JSON - we should send the status to our API
  const handleWatchStatus = () => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON,
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }


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
    fetch(`https://api.themoviedb.org/3/movie/${movieList}?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      }, [movieList])
  })

  // Below we should keep track of whether the movies have been rated by the user or not
  // For the first time a user logs in no movies have been rated, i.e. we will have for example
  // an empty array in our own API for our Users, moviesWatched=[]
  // However, for the second time the user logs in the array might not be empty anymore
  // First we should get the code below to work for a first-time logged-in user but
  // if we get that to work a next step would be to keep track of the info. we have in our own API for that user

  return (
    <Wrapper>
      {message && (
        <Wrapper>
          <Heading>You're logged in!</Heading>
          <Heading>{message}</Heading>
          <p>To get started, here's a list of popular movies you can rate to get started</p>
          <section className="movies-list">

            {movies.map((movie) => (
              <div
                className="movie-row"
                key={movie.id}
              >
                <Link to={`movies/${movie.id}`}>
                  <h2 className="movie-title">{movie.title}</h2>
                </Link>
                <button onClick={handleRating(1)}>1</button>
                <button onClick={handleRating(2)}>2</button>
                <button onClick={handleRating(3)}>3</button>
                <button onClick={handleRating(4)}>4</button>
                <button onClick={handleRating(5)}>5</button>
                <button onClick={handleWatchStatus("Rewatch")}>Rewatch</button>
                <button onClick={handleWatchStatus("Watch")}>Watch</button>
                <button onClick={handleWatchStatus("Not again")}>Not again</button>
                <button onClick={handleWatchStatus("No thanks")}>No thanks</button>
              </div>
            ))}
          </section>
        </Wrapper>
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
    </Wrapper>
  );
};
