import React, { useState } from "react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export const Ratingcopy = ({ movieId, movieTitle }) => {
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

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={rate}
          onChange={(e, rating) => handleRating(userId, movieId, movieTitle, rating)
          }
        />
      </Box>
    </div>

  )
}