import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import {
  MoviesRatedParagraph,
  UserNames, WrapperWelcomeBox
} from "./Styling"
import { MovieDetail2 } from './MovieDetail2';

export const OtherUser = (props) => {
  const [moviesRated, setMoviesRated] = useState([])
  const [watchList, setWatchList] = useState([])
  const [userName, setUserName] = useState("")
  const { userId } = useParams()
  const myId = useSelector((state) => state.users.userId)



  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/otherUser`)
      .then(res => res.json())
      .then(json => {
        setMoviesRated(json.otherUser)
        setUserName(json.name)
      })
  }, [userId])

  useEffect(() => {
    fetch(`http://localhost:8080/movies/${myId}?friend=${userId}`)
      .then(res => res.json())
      .then(json => {
        setWatchList(json)
        console.log(json)
        console.log(`http://localhost:8080/movies/${myId}?friend=${userId}`)
        // console.log()
      })
  }, [userId])

  console.log(watchList)
  return (
    <WrapperWelcomeBox>
      <UserNames>User page: {userName}</UserNames>
      <MoviesRatedParagraph>You have a match on {watchList.length} movies </MoviesRatedParagraph>
      <section>
        {watchList.map((movie) => (
          <MovieDetail2 key={movie.movieId} id={movie.movieId} />
        ))}
      </section>
      <MoviesRatedParagraph>Movies that {userName} has rated </MoviesRatedParagraph>
      <section>
        {moviesRated.map((movie) => (
          movie.rating &&
          <MovieDetail2 key={movie.movieId} id={movie.movieId} />
        ))}
      </section>
    </WrapperWelcomeBox>
  )
}