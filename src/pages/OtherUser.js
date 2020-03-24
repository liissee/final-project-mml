import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { MoviesMatched } from '../components/MoviesMatched'
import styled, { keyframes } from 'styled-components/macro'
import { WrapperWelcomeBox } from "../components/Styling"


export const OtherUser = () => {
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

  const ratingStars = (rating) => {
    if (rating === 5) {
      return (
        <>
          <Icon>star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
        </>
      )

    } else if (rating === 4) {
      return (
        <>
          <Icon>star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
        </>
      )
    } else if (rating === 3) {
      return (
        <>
          <Icon>star</Icon>
          <Icon>star</Icon>
          <Icon>star</Icon>
        </>
      )
    } else if (rating === 2) {
      return (
        <>
          <Icon>star</Icon>
          <Icon>star</Icon>
        </>
      )
    } else if (rating === 1) {
      return <Icon>star</Icon>
    } else {
      return
    }
  }


  return (
    <OtherUserMain>
      <WrapperOtherUser>
        <Header>
          <UserNames>USERNAME: {userName}</UserNames>
          {watchList.length > 0
            ? <MoviesRatedParagraph>YEY! YOU HAVE A MATCH ON {watchList.length} MOVIES </MoviesRatedParagraph>
            : <MoviesRatedParagraph>Add some movies to your watchlist and see if you have a match with {userName}!</MoviesRatedParagraph>
          }
        </Header>
        <WrapperWelcomeBox>
          {watchList.map((movie) => (
            <MoviesMatched key={movie.movieId} id={movie.movieId} />
          ))}
        </WrapperWelcomeBox>
        <MoviesRatedParagraph>Movies that {userName} has rated </MoviesRatedParagraph>
        <Rated>
          {moviesRated.map((movie) => (
            movie.rating &&
            <RatedCard>
              <OthersRating><RatedSpan>{userName}s rating: </RatedSpan> <span>{ratingStars(movie.rating)}</span> </OthersRating>
              <MoviesMatched key={movie.movieId} id={movie.movieId} />
            </RatedCard>
          ))}
        </Rated>
      </WrapperOtherUser>
    </OtherUserMain>
  )
}



const jump = keyframes`
  0%   {transform: translate3d(0,0,0);}
  20%  {transform: translate3d(0,10%,0);}
  40%  {transform: translate3d(0,30%,0);}
  50%  {transform: translate3d(0,50%,0);}
  100% {transform: translate3d(0,50%,0);}
`
const Image = styled.img`
  animation: ${jump} .5s linear alternate infinite;
  transform-origin: 50% 50%;
`
const OthersRating = styled.div`
  display: flex;
  flex-wrap: wrap;
  left: 155px;
  position: absolute;
  top: 74px;
  @media(min-width: 768px) {
    left: 216px;
    top: 80px;
  }
  @media(min-width: 1024px) {
    left: 220px;
    top: 80px;
  }
`
const Rated = styled.section`
  background: transparent;
  margin-top: 10px;
  max-width: 900px;
  border-radius: 8px;
  display: block;
  margin: 60px auto;
  &.link-text {
    text-decoration: none;
  }
  @media(min-width: 768px) {
    padding: 20px 30px 30px 30px;
  }
`
const RatedCard = styled.div`
  position: relative;
`
const RatedSpan = styled.span`
  padding: 4px 2px 0 0;
`


// Otheruser /////////////////////////////////////////////
const Header = styled.section`
`
const Matched = styled.section`
`
const MoviesRatedParagraph = styled.h3`
  font-size: 1.5;
  font-weight: normal;
  padding: 15px;
  text-align: center;
`
const OtherUserMain = styled.section`
`
const UserNames = styled.h1`
  font-size: 1.5em;
  font-weight: normal;
  padding: 20px;
  text-align: center;
`
const WrapperOtherUser = styled.div`
  color: white;
`