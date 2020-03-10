import React, { useState, useEffect } from 'react'
import {
  Wrapper, MovieRatedRow, Heading,
  MovieTitleRated, RatingStars, UserNames
} from "./Styling"
import { Link } from 'react-router-dom'

// Fetch data with a GET request to our MongoDB database for an individual user 
export const UserPage = () => {
  const [moviesRated, setMoviesRated] = useState([])
  const [movieStatus, setMovieStatus] = useState([])
  const [userList, setUserList] = useState([])
  // const { userId } = useParams()
  const userId = window.localStorage.getItem("userId")



  //How to change user based on ID in the URL?? 

  const ratingStars = (rating) => {
    if (rating === 5) {
      return "⭐️⭐️⭐️⭐️⭐️"
    } else if (rating === 4) {
      return "⭐️⭐️⭐️⭐️"
    } else if (rating === 3) {
      return "⭐️⭐️⭐️"
    } else if (rating === 2) {
      return "⭐️⭐️"
    } else if (rating === 1) {
      return "⭐️"
    } else {
      return ""
    }
  }

  const watchStatus = "watch"

  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/movies`)
      .then(res => res.json())
      .then(json => {
        setMoviesRated(json)
        console.log("ratedmovies:", json)
      })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/allUsers`)
      .then(res => res.json())
      .then(json => {
        setUserList(json)
        console.log("all users:", json)

      })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/movies?watchStatus=${watchStatus}`)
      .then(res => res.json())
      .then(json => {
        setMovieStatus(json)
        console.log("watchstatus:", json)
      })
  }, [])


  return (
    <Wrapper>
      <Heading>Welcome ! </Heading>
      <p>Movies that you have rated</p>
      <section>
        {moviesRated[0] && (
          moviesRated.map((movie) => (
            <MovieRatedRow
              key={movie.movieId}
            >
              <Link to={`movies/${movie.movieId}`}>
                <MovieTitleRated>{movie.movieTitle}</MovieTitleRated>
              </Link>
              <RatingStars>{ratingStars(movie.rating)}</RatingStars>
            </MovieRatedRow>
          ))
        )}
        <UserNames> Other users</UserNames>
        {userList.map((user) => (
          <div
            key={user._id}
          >
            <Link to={`users/${user._id}`}>
              <div>{user.name}</div>
            </Link>
          </div>
        ))}
      </section>
      <div>
        <p>Movies on your watchlist</p>
        {movieStatus.map((movie) => (
          <div key={movie.movieId}>
            <li>{movie.movieTitle}</li>
          </div>
        ))}

      </div>
    </Wrapper >
  );
};