import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Wrapper } from "./Styling";

const url = "http://localhost:8080/secrets";

export const Welcome = props => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = ([])
  const [movieList, setMovieList] = useState("top_rated")
  // const movie_url = https://api.themoviedb.org/3/movie/${movieList}?api_key=<enter key>&language=en-US&page=1

  //Getting the accessToken from the browser's localStorage
  //and sending it as the header "Authorization"
  const accessToken = window.localStorage.getItem("accessToken");

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

  useEffect(() => {
    fetch(`movie_url`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      }, [movieList])
  })

  return (
    <Wrapper>
      {message && (
        <div>
          <Heading>You're logged in!</Heading>
          <Heading>{message}</Heading>
          <p>Your watch-lists will be shown here...</p>
          <section className="movies-list">
            {movies.map((movie) =>(
              <div 
                className="movie-row"
                key={movie.id}
              >
                <Link to={`movies/${movie.id}`}>
                  <h2 className="movie-title">{movie.title}</h2>
                </Link>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>Rewatch</button>
                <button>Watch</button>
                <button>Not again</button>
                <button>No thanks</button>
              </div>
            ))}
          </section>
        </div>
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
