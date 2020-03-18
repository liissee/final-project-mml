import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import {
  // MovieInfo, MoviesRatedParagraph, MovieRatedRow,
  // UserNames, WrapperWelcomeBox

} from "./Styling"
import { MoviesMatched } from './MoviesMatched';
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
        <Header>
          <UserNames>USERNAME: {userName}</UserNames>
          {watchList.length > 0
            ? <MoviesRatedParagraph>YEY! YOU HAVE A MATCH ON {watchList.length} MOVIES </MoviesRatedParagraph>
            : <MoviesRatedParagraph>Add some movies to your watchlist and see if you have a match with {userName}!</MoviesRatedParagraph>}
        </Header>
        <Matched>
          {watchList.map((movie) => (
            <MoviesMatched key={movie.movieId} id={movie.movieId} />

            //  <MovieRatedRow
            //    key={movie.id}
            //  >
            //    <MovieInfo>{movie.movieTitle}</MovieInfo>
            //  </MovieRatedRow>
          ))}
        </Matched>
        <MoviesRatedParagraph>Movies that {userName} has rated </MoviesRatedParagraph>
        <Rated>
          {moviesRated.map((movie) => (
            movie.rating &&
            <MoviesMatched key={movie.movieId} id={movie.movieId} />
          ))}
        </Rated>
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
const Header = styled.section`

`
const UserNames = styled.h1`
font-size: 1.5em;
font-weight: normal;
padding: 20px;

`
const Matched = styled.section`

`

const Rated = styled.section`

`
const MoviesRatedParagraph = styled.h3`
  padding: 15px;
  font-size: 1.5;
  font-weight: normal;
  text-align: center;
`
const WrapperWelcomeBox = styled.div`
color: white;
  /* background: red;
  max-width: 900px; */
`