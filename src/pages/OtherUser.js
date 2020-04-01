import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { MoviesMatched } from '../components/MoviesMatched'
import styled, { keyframes } from 'styled-components/macro'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { WrapperWelcomeBox, UserNames2, UserName2, UserName3 } from "../components/Styling"

export const OtherUser = () => {
  const [moviesRated, setMoviesRated] = useState([])
  const [watchList, setWatchList] = useState([])
  const [userName, setUserName] = useState("")
  const { userId } = useParams()
  const myId = useSelector((state) => state.users.userId)

  useEffect(() => {
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/otherUser`)
      .then(res => res.json())
      .then(json => {
        setMoviesRated(json.otherUser)
        setUserName(json.name)
      })
  }, [userId])

  useEffect(() => {
    fetch(`https://final-movie-match.herokuapp.com/movies/${myId}?friend=${userId}`)
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
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
        </>
      )

    } else if (rating === 4) {
      return (
        <>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
        </>
      )
    } else if (rating === 3) {
      return (
        <>
          <Icon style={{ color: "tomato" }} > star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
        </>
      )
    } else if (rating === 2) {
      return (
        <>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
        </>
      )
    } else if (rating === 1) {
      return (
        <>
          <Icon style={{ color: "tomato" }} >star</Icon>
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
        </>
      )
    } else {
      return (
        <>
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          <StarBorderIcon style={{ color: "rgba(255, 255, 255, 0.8)" }} />
        </>
      )
    }
  }


  return (
    <OtherUserMain>
      <WrapperOtherUser>
        <Header>
          <UserName2><span>{userName}</span></UserName2>
          {watchList.length > 0
            ? <UserName3>YEY! YOU AND {userName} HAVE A MATCH ON {watchList.length} MOVIES </UserName3>
            : <UserName3>Add some movies to your watchlist and see if you have a match with {userName}!</UserName3>
          }
        </Header>
        <WrapperWelcomeBox>
          {watchList.map((movie) => (
            <RatedCard>
              <OthersRating><RatedSpan>{userName}s rating: </RatedSpan> <span>{ratingStars(movie.rating)}</span> </OthersRating>
              <MoviesMatched key={movie.movieId} id={movie.movieId} />
            </RatedCard>
          ))}
        </WrapperWelcomeBox>
        <UserName3>Movies that {userName} has rated </UserName3>
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


const Header = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const MoviesRatedParagraph = styled.h3`
  font-size: 1.5;
  font-weight: normal;
  padding: 15px;
  text-align: center;
`
const OthersRating = styled.div`
  display: flex;
  flex-wrap: wrap;
  left: 155px;
  position: absolute;
  top: 74px;
  @media(min-width: 768px) {
    left: 216px;
  }
  @media(min-width: 1024px) {
    left: 220px;
  }
`
const OtherUserMain = styled.section`
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

// const UserNames = styled.h1`
//   font-size: 1.5em;
//   font-weight: normal;
//   padding: 20px;
//   text-align: center;
// `
const WrapperOtherUser = styled.div`
  color: white;
`