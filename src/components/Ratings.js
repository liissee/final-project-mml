import React, { useState, useEffect } from "react";
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux'
import { RatingButtonContainer } from "./Styling";
import styled from "styled-components/macro"

export const Ratings = ({ movieId, movieTitle }) => {
  const [rate, setRate] = useState()
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)


  // Function that is invoced when the user rates a movie
  const handleRating = (userId, movieTitle, rating) => {
    setRate(rating)
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}`, {
      // fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, rating }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken },
    }).catch(err => {
      console.log("Failed to fetch")
    });
  }

  // GET movies with rating
  useEffect(() => {
    if (!userId) return;
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/movies?movieId=${movieId}`)
      // fetch(`http://localhost:8080/users/${userId}/movies?movieId=${movieId}`)
      .then(res => res.json())
      .then(json => {
        if (json && json.rating) {
          setRate(json.rating)
        }
      })
  }, [movieId])

  const BoxContainer = styled(Box)`
    margin-bottom: 50px;
    padding: 0;
`

  return (
    <>
      <RatingButtonContainer>
        <BoxContainer
          component="fieldset"
          mb={3}
          borderColor="transparent"
          marginBottom="0px"
          width="100px"
          borderRadius="10px"
          bgcolor="rgba(255, 255, 255, 0.1)"
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
