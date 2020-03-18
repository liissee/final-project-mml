import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const Comments = () => {
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const [comment, setComment] = useState("")
  const [postedComment, setPostedComment] = useState("")

  const CommentCard = styled.div`
    border: 1px solid gray;
    background: #F5F5F5;
    color: black;
    display: flex;
    flex-direction: column;
    height: 35vh;
    margin-bottom: 4vh;
    padding-left: 10vw;
    width: 70vw;
  ` 
  const CommentForm = styled.form`
  `
  const CommentTitle = styled.h3`
  `
  const CommentLabel = styled.label`
  `
  const CommentTextarea = styled.textarea`
    height: 4vh;
    margin-left: 0;
    margin-top: 1vh;
    resize: none;
    width: 65vw;
  `
  const CommentSendButton = styled.button`
    background: black;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0;
    margin-bottom: 3vh;
    margin-top: 1vh;
    width: 65vw;
  `

  const handleSubmit = (userId, movieTitle, comment) => {
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, comment }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken },
    })
      .then(() => {
        setComment("")
        onFormSubmit(comment)
      })
      .catch(err => console.log("error:", err))
  }

  const onFormSubmit = comment => {
    setPostedComment(comment)
  }

  return(
    <CommentCard>
      <CommentForm>
        <CommentTitle>Comments</CommentTitle>
        
        <CommentLabel>
        <CommentTextarea
          value={message}
          onChange={event => setMessage(event.target.value)}
        >
        </CommentTextarea>
        </CommentLabel>

        <CommentSendButton
          type="submit"
          onClick={handleSubmit}
        >
          Submit comment
        </CommentSendButton>
      
      </CommentForm>
    </CommentCard>
  )
}
