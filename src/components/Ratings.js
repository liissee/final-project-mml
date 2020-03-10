import React, { useState } from "react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {
  ButtonWatch, RatingButtonContainer, ButtonRating
} from "./Styling";


export const Ratings = ({ movieId, movieTitle }) => {
  const [rate, setRate] = useState("")

  const accessToken = window.localStorage.getItem("accessToken");
  const userId = window.localStorage.getItem("userId")

  // function that will be invoced when the user rates a movie, i.e. 
  // when the user clicks on a rating button
  // this value should be sent to our own API with PUT or POST somehow
  const handleRating = (userId, movieId, movieTitle, rating) => {
    setRate(rating)
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, rating }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }

  // function that will be invoced when the user clicks on "Re watch", "Watched" etc.
  // we should discuss what code to add in body: JSON - we should send the status to our API
  const handleWatchStatus = (userId, movieId, movieTitle, watchStatus) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, watchStatus }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
  }

  //  const ratingStars = (rating) => {
  //     if (rating === 5) {
  //       return "⭐️⭐️⭐️⭐️⭐️"
  //     } else if (rating === 4) {
  //       return "⭐️⭐️⭐️⭐️"
  //     } else if (rating === 3) {
  //       return "⭐️⭐️⭐️"
  //     } else if (rating === 2) {
  //       return "⭐️⭐️"
  //     } else if (rating === 1) {
  //       return "⭐️"
  //     } else {
  //       return ""
  //     }
  //   }

  return (
    <RatingButtonContainer>
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={rate}
            onChange={(e, rating) => handleRating(userId, movieId, movieTitle, rating)
            }
          />
        </Box>
        <ButtonRating onClick={(e) => handleRating(userId, movieId, movieTitle, 1)}> 1 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movieId, movieTitle, 2)}> 2 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movieId, movieTitle, 3)}> 3 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movieId, movieTitle, 4)}> 4 </ButtonRating>
        <ButtonRating onClick={(e) => handleRating(userId, movieId, movieTitle, 5)}> 5 </ButtonRating>
      </div>
      <div>
        <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieId, movieTitle, "watch")}> Watch </ButtonWatch>
        <ButtonWatch onClick={(e) => handleWatchStatus(userId, movieId, movieTitle, "no")}> No thanks</ButtonWatch>
      </div>
    </RatingButtonContainer>
  )
}