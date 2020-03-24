import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "components/comments.css"
import styled from 'styled-components/macro'
import { ButtonWatch } from './Styling'

export const Comments = ({ movieId, movieTitle }) => {
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const userName = useSelector((state) => state.users.userName)

  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [postedComment, setPostedComment] = useState("")


  const CommentTitle = styled.h3`
    color: white;
  `

  const handleSubmit = (comment) => {
    // fetch(`http://localhost:8080/users/${userId}`, {
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}`, {
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
    fetch(`https://final-movie-match.herokuapp.com/comments/${movieId}`)
      .then(res => res.json())
      .then(json => {
        setComments(json)
        console.log(json)
      })
  }, [postedComment])


  const handleNewComment = event => {
    event.preventDefault()
    handleSubmit(comment)
    setComment("")
  }

  return (
    <div className="comments-main-wrapper">
      <div className="comments-post-wrapper">
        <form className="comment-form">
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
          <div className="buttonwrapper">
            <div>
              <ButtonWatch
                type="submit"
                disabled={comment.length < 5 || comment.length > 300 ? true : false}
                onClick={handleNewComment}
              >
                Submit
          </ButtonWatch>
            </div>
            <div className="text-length">
              <p className={comment.length < 5 || comment.length > 300 ? "red" : "black"}>{comment.length}</p><p>/300</p>
            </div>
          </div>
        </form>
      </div>

      <h3 className="cards-title">Reviews</h3>
      <div className="cards-wrapper">
        <div className="comment">
          {comments.map((comment) => (
            <article className="inside-cards">
              <p>{comment.comment}</p>
              <p>Username: {comment.userName}</p>
            </article>
          ))}
        </div>
      </div>
    </div >
  )
}