import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { ButtonWatch, RatingButtonContainer } from "./Styling";


export const WatchStatus = ({ movieId, movieTitle }) => {
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const [watchStatus, setWatchStatus] = useState()

  // Function that is invoced when the user clicks on Add or Remove from watchlist
  const handleWatchStatus = (userId, movieTitle, watchStatus) => {
    setWatchStatus(watchStatus)
    fetch(`https://final-movie-match.herokuapp.com//users/${userId}`, {
      // fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, watchStatus }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken }
    })
    console.log(watchStatus)
  }

  // GET a movie's watchstatus
  useEffect(() => {
    if (!userId) return;
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/movies?movieId=${movieId}`)
      // fetch(`http://localhost:8080/users/${userId}/movies?movieId=${movieId}`)
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
      <RatingButtonContainer>
        <div>
          <ButtonWatch
            disabled={!accessToken}
            onClick={(e) => handleWatchStatus(userId, movieTitle, !watchStatus)}>
            {watchStatus ? "REMOVE FROM WATCHLIST" : "ADD TO WATCHLIST"}
          </ButtonWatch>
        </div>
      </RatingButtonContainer>
    </>
  )
}

// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 1)}> 1 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 2)}> 2 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 3)}> 3 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 4)}> 4 </ButtonRating>
// <ButtonRating onClick={(e) => handleRating(userId, movieTitle, movieImage, 5)}> 5 </ButtonRating>