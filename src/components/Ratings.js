import React, { useState, useEffect } from "react";
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux'
import { ButtonWatch, RatingButtonContainer } from "./Styling";
import styled from "styled-components/macro"

export const Ratings = ({ movieId, movieTitle }) => {
  const [rate, setRate] = useState()
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  // const rating = window.localStorage.getItem(movieId)
  // const accessToken = window.localStorage.getItem("accessToken");
  // const userId = window.localStorage.getItem("userId")


  // Function that is invoced when the user rates a movie
  const handleRating = (userId, movieTitle, rating) => {
    setRate(rating)
    // setRate(rating)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, rating }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken },
    }).catch(err => {
      // Show an error message
    });
    // .then(() => {
    //   window.localStorage.setItem(movieId, rating);
    // })
  }


  // Function that is invoced when the user clicks on "Watch" or "No thanks"
  const handleWatchStatus = (userId, movieTitle, watchStatus) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, watchStatus }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }
  //MOVED TO WatchStatus.js
  // // function that will be invoced when the user clicks on "Re watch", "Watched" etc.
  // // we should discuss what code to add in body: JSON - we should send the status to our API
  // const handleWatchStatus = (userId, movieTitle, watchStatus) => {
  //   fetch(`http://localhost:8080/users/${userId}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ userId, movieId, movieTitle, watchStatus }),
  //     headers: { "Content-Type": "application/json", "Authorization": accessToken }
  //   })
  // }


  // GET movies with rating
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/movies?movieId=${movieId}`)
      .then(res => res.json())
      .then(json => {
        if (json && json.rating) {
          setRate(json.rating)
        }
      })
  }, [movieId])

  const BoxContainer = styled(Box)`
    padding: 0;
    margin-bottom: 50px;
`

  return (
    <>
      {/* {accessToken && */}
      <RatingButtonContainer>
        <BoxContainer 
          component="fieldset" 
          mb={3} 
          borderColor="transparent" 
          marginBottom="0px" 
          width="100px"
        >
          <Rating
            name={"simple-controlled" + movieId}
            value={rate}
            disabled={!accessToken}
            onChange={(e, rating) => {
              handleRating(userId, movieTitle, rating)
            }
            }
          />
        </BoxContainer>
      </RatingButtonContainer>
    </>
  )
}


// {/* <div>
//   <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieTitle, true)}> Watch </ButtonWatch>
//   <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieTitle, false)}> No thanks</ButtonWatch>
// </div> */}

// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 1)}> 1 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 2)}> 2 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 3)}> 3 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 4)}> 4 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 5)}> 5 </ButtonRating>

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