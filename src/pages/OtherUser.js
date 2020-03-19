import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import {
  // MovieInfo, MoviesRatedParagraph, MovieRatedRow,
  // UserNames, WrapperWelcomeBox
} from "../components/Styling"
import { MoviesMatched } from '../components/MoviesMatched';
import styled, { keyframes } from 'styled-components/macro'
import Icon from '@material-ui/core/Icon'

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

  //   const handleRatingStars = (rating) => {
  //     let amountOfStars = []
  //     for (let i = 0; i < rating; i++) {
  //       amountOfStars.push(
  //         (<View>
  //           <Text>{this.props.photos[0].description}</Text>
  //         </View>)
  //       );
  //     }

  //   return (
  //     <View>
  //       {photoHolder}
  //     </View>
  //   )
  // }

  return (
    <OtherUserMain>
      <WrapperWelcomeBox>
        <Header>
          <UserNames>USERNAME: {userName}</UserNames>
          {watchList.length > 0
            ? <MoviesRatedParagraph>YEY! YOU HAVE A MATCH ON {watchList.length} MOVIES </MoviesRatedParagraph>
            : <MoviesRatedParagraph>Add some movies to your watchlist and see if you have a match with {userName}!</MoviesRatedParagraph>
          }
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
            <RatedCard>
              <OthersRating><RatedSpan>{userName}s rating: </RatedSpan> {ratingStars(movie.rating)} </OthersRating>
              <MoviesMatched key={movie.movieId} id={movie.movieId} />
            </RatedCard>
          ))}
        </Rated>
      </WrapperWelcomeBox>
    </OtherUserMain>
  )
}

const RatedSpan = styled.span`
padding: 4px 2px 0 0;
`

const RatedCard = styled.div`
position: relative;
`

const OthersRating = styled.div`
  position: absolute;
  top: 74px;
  left: 210px;
  display:flex;
  @media(min-width: 768px) and (max-width: 1024px) {
    top: 80px;
    left: 216px;
  }
  @media(min-width: 1025px) and (max-width: 1225px) {
    top: 80px;
    left: 220px;
  }
  @media(min-width: 1225px) and (max-width: 1425px) {
    top: 80px;
    left: 226px;
  }
  @media(min-width: 1425px) {
    top: 80px;
    left: 230px;
  }
`

const jump = keyframes`
  0%   {transform: translate3d(0,0,0);}
  20%  {transform: translate3d(0,10%,0);}
  40%  {transform: translate3d(0,30%,0);}
  50% {transform: translate3d(0,50%,0);}
  100% {transform: translate3d(0,50%,0);}
`
const Image = styled.img`
  transform-origin: 50% 50%;
  animation: ${jump} .5s linear alternate infinite;
`

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