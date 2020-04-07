import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from "moment"
import 'components/comments.css'
import { 
  ButtonWatch, ButtonWrapper, CommentCard, CommentForm, CommentText, 
  CommentUserName, CommentWrapper, InsideCards, NewComment,
  RemoveButton, TextLength,  UserName3 
} from './Styling'


export const Comments = ({ movieId, movieTitle }) => {
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const userName = useSelector((state) => state.users.userName)

  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [postedComment, setPostedComment] = useState("")
  const [updatedMessage, setUpdatedMessage] = useState(false)

  const url = "https://final-movie-match.herokuapp.com"


  const handleSubmit = (comment) => {
    fetch(`${url}/comments/${movieId}`, {
      method: "PUT",
      body: JSON.stringify({ userId, comment, userName, movieId }),
      headers: { "Content-Type": "application/json", "Authorization": accessToken },
    })
      .then(() => {
        setPostedComment(comment)
      })
      .catch(err => console.log("error:", err))
  }

  // Get comments
  useEffect(() => {
    fetch(`${url}/comments/${movieId}`)
      .then(res => res.json())
      .then(json => {
        setComments(json)
        console.log(json)
      })
  }, [postedComment, updatedMessage])


  const handleNewComment = event => {
    event.preventDefault()
    handleSubmit(comment)
    setComment("")
  }

  const handleRemove = (createdAt) => {
    setUpdatedMessage(!updatedMessage)
    fetch(`${url}/comments/${movieId}`, {
      method: "DELETE",
      body: JSON.stringify({ userId, createdAt }),
      headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
    })
      .catch(err => {
        throw err;
      })
  }

  return (
    <CommentWrapper>
      <CommentForm>
        <UserName3>Reviews</UserName3>
        <label>
          <NewComment
            className="textarea-review"
            rows="3"
            value={comment}
            placeholder="Type your review here..."
            onChange={event => setComment(event.target.value)}
          />
        </label>
        <ButtonWrapper>
          <ButtonWatch
            type="submit"
            disabled={comment.length < 5 || comment.length > 300 ? true : false}
            onClick={handleNewComment}
          >
            Submit
              </ButtonWatch>
          <TextLength>
            <p className={comment.length < 5 || comment.length > 300 ? "red" : "black"}>{comment.length}</p><p>/300</p>
          </TextLength>
        </ButtonWrapper>
      </CommentForm>

      <CommentCard>

        {comments[0] && comments.map((comment) => (
          <>
            <InsideCards>
              <CommentUserName><span>{comment.userName}</span>{moment(comment.createdAt).fromNow()}{comment.userName === userName && (
                <RemoveButton typ="button" onClick={() => { handleRemove(comment.createdAt) }}>❌</RemoveButton>
              )}</CommentUserName>
              <CommentText>{comment.comment}</CommentText>
            </InsideCards>
          </>
        ))}
      </CommentCard>
    </CommentWrapper>
  )
}