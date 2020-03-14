import React, { useState, useEffect } from "react";
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux'
import { ButtonWatch, RatingButtonContainer } from "./Styling";
import styled from "styled-components/macro"

export const Ratings = ({ movieId, movieTitle, movieImage }) => {
  // const rating = window.localStorage.getItem(movieId)
  const [rate, setRate] = useState()
  const [loading, setLoading] = useState(true)
  // const accessToken = window.localStorage.getItem("accessToken");
  // const userId = window.localStorage.getItem("userId")

  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)

  // function that will be invoced when the user rates a movie, i.e. 
  // when the user clicks on a rating button
  // this value should be sent to our own API with PUT or POST somehow
  const handleRating = (userId, movieTitle, movieImage, rating) => {
    // setRate(rating)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, movieImage, rating }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken },
    })
    // .then(() => {
    //   window.localStorage.setItem(movieId, rating);
    // })
  }

  // function that will be invoced when the user clicks on "Re watch", "Watched" etc.
  // we should discuss what code to add in body: JSON - we should send the status to our API
  const handleWatchStatus = (userId, movieTitle, movieImage, watchStatus) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, movieImage, watchStatus }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }

  // GET movies with rating
  useEffect(() => {
    //   // if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/movies?movieId=${movieId}`)
      .then(res => res.json())
      .then(json => {

        // const thisMovieRating = json.find(item => item.movieId === movieId)
        if (json && json.rating) {
          setRate(json.rating)
          console.log('JAAAASON', json)
        }

        // else if (json === null) {
        //   setRate(0)
        // }

        // setRate(json.rating ? json.rating : 0)
        // setRate(json.rating)
        // console.log('🤯', thisMovieRating)
      })
      .then(setLoading(false))
  }, [movieId])

  //JENNIES
  // // GET movies with rating
  // useEffect(() => {
  //   //   // if (!userId) return;
  //   fetch(`http://localhost:8080/users/${userId}/movies/`)
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log('JAAAASON', json)
  //       const thisMovieRating = json.find(item => item.movieId === movieId)
  //       setRate((thisMovieRating && thisMovieRating.rating) || 0)

  //       console.log('🤯', thisMovieRating)
  //     })
  // }, [movieId])
  // console.log(rate)

  //  {
  //       "_id": "5e6a086c791d8f06884e62ce",
  //       "userId": "5e6672445e6e220891b9c5c6",
  //       "movieId": 559969,
  //       "movieTitle": "El Camino: A Breaking Bad Movie",
  //       "rating": 2,
  //       "date": "2020-03-12T10:01:16.439Z",
  //       "__v": 0
  //   },

  const Lalala = styled(Box)`
    padding: 0;
    margin-bottom: 50px;
`

  return (
    <>
      {/* {accessToken && */}
      {!loading && (
        <RatingButtonContainer>
          <Lalala component="fieldset" mb={3} borderColor="transparent" marginBottom="0px" width="100px">
            <Rating
              name={"simple-controlled" + movieId}
              value={rate}
              disabled={!accessToken}
              onChange={(e, rating) => {
                handleRating(userId, movieTitle, movieImage, rating)
              }
              }
            />
          </Lalala>
          <div>
            <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieTitle, movieImage, "watch")}> Watch </ButtonWatch>
            <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieTitle, movieImage, "no")}> No thanks</ButtonWatch>
          </div>
        </RatingButtonContainer>
      )}
      {/* } */}
    </>
  )
}

// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 1)}> 1 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 2)}> 2 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 3)}> 3 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 4)}> 4 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 5)}> 5 </ButtonRating>