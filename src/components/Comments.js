import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { ButtonWatch } from './Styling'
import "components/comments.css"

export const Comments = ({ movieId, movieTitle }) => {
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const userName = useSelector((state) => state.users.userName)

  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [postedComment, setPostedComment] = useState("")

  const CommentCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 35vh;
    margin-bottom: 4vh;
    margin-left: 2vw;
    width: 60vw;
  `
  const CommentForm = styled.form`
  `
  const CommentTitle = styled.h3`
    color: white;
  `
  const CommentLabel = styled.label`
  `
  const CommentTextarea = styled.textarea`
    font-size: 16px;
    height: 12vh;
    margin-bottom: 2vh;
    margin-left: 0;
    margin-top: 1vh;
    resize: none;
    width: 55vw;
  `
  const CommentSendButton = styled.button`
    background: white;
    border: none;
    color: black;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    height: 6vh;
    margin-bottom: 3vh;
    margin-left: 0;
    margin-top: 1vh;
    width: 10vw;
  `


  const handleSubmit = (comment) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      // fetch(`https://final-movie-match.herokuapp.com/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, movieId, movieTitle, comment, userName }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken },
    })
      .then(() => {
        setPostedComment(comment)
      })
      .catch(err => console.log("error:", err))
  }

  useEffect(() => {
    fetch(`http://localhost:8080/comments/${movieId}`)
      .then(res => res.json())
      .then(json => {
        setComments(json)
        console.log(json)
      })
  }, [comment])


  const handleNewComment = event => {
    event.preventDefault()
    handleSubmit(comment)
    setComment("")
  }

  return (
    <div className="comments-main-wrapper">
      <div className="comments-post-wrapper">
        <form>
          <CommentTitle>Your review</CommentTitle>

          <label>
            <textarea
              className="textarea-review"
              rows="3"
              value={comment}
              placeholder="Type your review here..."
              onChange={event => setComment(event.target.value)}
            >
            </textarea>
          </label>

          <div>
            <ButtonWatch
              type="submit"
              onClick={handleNewComment}
            >
              Submit
          </ButtonWatch>
          </div>
        </form>
      </div>

      <h3 className="cards-title">Reviews</h3>
      <div className="cards-wrapper">
        <article className="cards">
          <div className="comment">
            {comments.map((comment) => (
              <>
                <p>{comment.comment}</p>
                <p>{comment.userName}</p>
              </>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}