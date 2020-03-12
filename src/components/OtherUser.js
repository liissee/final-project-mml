import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import {
  MoviesRatedParagraph, MovieRatedRow, MovieTitleRated, 
  RatingStars, UserNames, WrapperWelcomeBox
} from "./Styling"
import { MovieDetail2 } from './MovieDetail2';

export const OtherUser = (props) => {
  const [moviesRated, setMoviesRated] = useState([])
  const [watchList, setWatchList] = useState([])
  const [userName, setUserName] = useState("")
  const { userId } = useParams()
  const myId = window.localStorage.getItem("userId")

  const ratingStars = (rating) => {
    if (rating === 5) {
      return "⭐️⭐️⭐️⭐️⭐️"
    } else if (rating === 4) {
      return "⭐️⭐️⭐️⭐️"
    } else if (rating === 3) {
      return "⭐️⭐️⭐️"
    } else if (rating === 2) {
      return "⭐️⭐️"
    } else {
      return "⭐️"
    }
  }

  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/otherUser`)
      .then(res => res.json())
      .then(json => {
        setMoviesRated(json.otherUser)
        setUserName(json.name)
        console.log(json.otherUser)
      })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8080/movies/${myId}?friend=${userId}`)
      .then(res => res.json())
      .then(json => {
        setWatchList(json)
        console.log(json)
      })
  }, [])

  return (
    <WrapperWelcomeBox>
      <UserNames>User page: {userName}</UserNames>
      <br></br>
      <MoviesRatedParagraph>Movies that {userName} has rated </MoviesRatedParagraph>
      <section>
        {moviesRated.map((movie) => (
          <MovieRatedRow
            key={movie._id}
          >
            <Link to={`/movies/${movie.movieId}`}>
              <MovieTitleRated>{movie.movieTitle}</MovieTitleRated>
            </Link>
            <RatingStars>{ratingStars(movie.rating)}</RatingStars>
          </MovieRatedRow>
        ))}
      </section>
      <br></br>

      <MoviesRatedParagraph>Both of you want to watch</MoviesRatedParagraph>
      <section>
        {watchList.map((movie) => (
          <MovieRatedRow
            key={movie._id}
          >
            <Link to={`/movies/${movie.movieId}`}>
              <MovieTitleRated>{movie.movieTitle}</MovieTitleRated>
            </Link>
          </MovieRatedRow>
        ))}

      </section>
    </WrapperWelcomeBox>
  )
}