import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import {
  MovieInfo, MoviesRatedParagraph, MovieRatedRow,
  UserNames, WrapperWelcomeBox
} from "./Styling"
import { MovieCards } from './MovieCards';
import styled from "styled-components/macro"

export const OtherUser = (props) => {
  const [moviesRated, setMoviesRated] = useState([])
  const [watchList, setWatchList] = useState([])
  const [userName, setUserName] = useState("")
  const { userId } = useParams()
  const myId = useSelector((state) => state.users.userId)

  useEffect(() => {
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/otherUser`)
      // fetch(`http://localhost:8080/users/${userId}/otherUser`)
      .then(res => res.json())
      .then(json => {
        setMoviesRated(json.otherUser)
        setUserName(json.name)
      })
  }, [userId])

  useEffect(() => {
    fetch(`https://final-movie-match.herokuapp.com/movies/${myId}?friend=${userId}`)
      // fetch(`http://localhost:8080/movies/${myId}?friend=${userId}`)
      .then(res => res.json())
      .then(json => {
        setWatchList(json)
      })
  }, [userId])

  console.log(watchList)

  return (
    <OtherUserMain>
      <WrapperWelcomeBox>
        <UserNames>Username: {userName}</UserNames>
        <MoviesRatedParagraph>You have a match on {watchList.length} movies </MoviesRatedParagraph>
        <section>
          {watchList.map((movie) => (
            <MovieCards key={movie.movieId} id={movie.movieId} />

            //  <MovieRatedRow
            //    key={movie.id}
            //  >
            //    <MovieInfo>{movie.movieTitle}</MovieInfo>
            //  </MovieRatedRow>
          ))}
        </section>
        <MoviesRatedParagraph>Movies that {userName} has rated </MoviesRatedParagraph>
        <section>
          {moviesRated.map((movie) => (
            movie.rating &&
            <MovieCards key={movie.movieId} id={movie.movieId} />
          ))}
        </section>
      </WrapperWelcomeBox>
    </OtherUserMain>
  )
}
// Otheruser /////////////////////////////////////////////
const OtherUserMain = styled.section`
  /* background: black;
  height: 100%;
  margin: 0; */
`