import React, { useState } from "react";
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import {
  ButtonRating, ButtonWatch, RatingButtonContainer
} from "./Styling";


export const Ratings = ({ movieId, movieTitle, movieImage }) => {
  const rating = window.localStorage.getItem(movieId)
  const [rate, setRate] = useState(rating)

  const accessToken = window.localStorage.getItem("accessToken");
  const userId = window.localStorage.getItem("userId")


  // function that will be invoced when the user rates a movie, i.e. 
  // when the user clicks on a rating button
  // this value should be sent to our own API with PUT or POST somehow
  const handleRating = (userId, movieTitle, movieImage, rating) => {
    setRate(rating)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, movieImage, rating }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken },
    })
      .then(() => {
        window.localStorage.setItem(movieId, rating);
      })
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

  return (
    <>
      {/* {accessToken && */}
      <RatingButtonContainer>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name={"simple-controlled" + movieId}
              value={rate}
              onChange={(e, rating) => {
                console.log("I jUst klicksedddd ", { userId, movieTitle, movieImage, rating })
                handleRating(userId, movieTitle, movieImage, rating)
              }
              }
            />
          </Box>
        </div>
        <div>
          <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieTitle, movieImage, "watch")}> Watch </ButtonWatch>
          <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieTitle, movieImage, "no")}> No thanks</ButtonWatch>
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