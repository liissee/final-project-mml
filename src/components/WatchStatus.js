import React, { useState, useEffect } from "react";
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux'
import { ButtonWatch, RatingButtonContainer } from "./Styling";
import styled from "styled-components/macro"

export const WatchStatus = ({ movieId, movieTitle }) => {
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const [watchStatus, setWatchStatus] = useState()

  // function that will be invoced when the user clicks on "Re watch", "Watched" etc.
  // we should discuss what code to add in body: JSON - we should send the status to our API
  const handleWatchStatus = (userId, movieTitle, watchStatus) => {
    setWatchStatus(watchStatus)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, watchStatus }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
    console.log(watchStatus)
  }

  // GET a movies watchstatus
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/movies?movieId=${movieId}`)
      .then(res => res.json())
      .then(json => {
        console.log("This should get all movies", json)
        if (json && json.watchStatus) {
          setWatchStatus(json.watchStatus)
          console.log(watchStatus)
        } else if (json && !json.watchStatus) {
          setWatchStatus(false)
        }
      })
  }, [movieId])


  return (
    <>
      {/* {accessToken && */}

      <RatingButtonContainer>
        <div>

          <ButtonWatch
            disabled={!accessToken}
            onClick={(e) => handleWatchStatus(userId, movieTitle, !watchStatus)}>
            {watchStatus ? "REMOVE FROM WATCHLIST" : "ADD TO WATCHLIST"}
          </ButtonWatch>
          {/* <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieTitle, false)}> No thanks</ButtonWatch> */}
        </div>
      </RatingButtonContainer>
      {/* } */}
    </>
  )
}

// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 1)}> 1 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 2)}> 2 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 3)}> 3 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 4)}> 4 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 5)}> 5 </ButtonRating>