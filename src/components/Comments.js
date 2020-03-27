// import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import 'components/comments.css'
// import EdiText from "react-editext"
// import styled from "styled-components/macro"
// import { ButtonShowReviews, ButtonWatch, NewComment } from './Styling'


// export const Comments = ({ movieId, movieTitle }) => {
//   const accessToken = useSelector((state) => state.users.accessToken)
//   const userId = useSelector((state) => state.users.userId)
//   const userName = useSelector((state) => state.users.userName)

//   const [comment, setComment] = useState("")
//   const [comments, setComments] = useState([])
//   const [postedComment, setPostedComment] = useState("")
//   const [reviews, setShowReviews] = useState(false)

//   const url = "https://final-movie-match.herokuapp.com"


//   const handleSubmit = (comment) => {
//     fetch(`${url}/comments/${movieId}`, {
//       method: "PUT",
//       body: JSON.stringify({ userId, comment, userName, movieId }),
//       headers: { "Content-Type": "application/json", "Authorization": accessToken },
//     })
//       .then(() => {
//         setPostedComment(comment)
//       })
//       .catch(err => console.log("error:", err))
//   }

//   //Get comments
//   useEffect(() => {
//     fetch(`${url}/comments/${movieId}`)
//       .then(res => res.json())
//       .then(json => {
//         setComments(json)
//         console.log(json)
//       })
//   }, [postedComment])


//   const handleNewComment = event => {
//     event.preventDefault()
//     handleSubmit(comment)
//     setComment("")
//   }

//   const handleReviews = () => {
//     setShowReviews(!reviews)
//   }

//   const handleRemove = ({ userName, comment }) => {
//     fetch(`${url}/comments/${movieId}`, {
//       method: "DELETE",
//       body: JSON.stringify({ userId, userName, comment }),
//       headers: { "Content-Type": "application/json", "Authorization": sessionStorage.getItem("id_token") }
//     })
//       .catch(err => {
//         throw err;
//       })
//   }

//   return (
//     <div className="comments-main-wrapper">
//       <div className="comments-post-wrapper">
//         <form className="comment-form">
//           <h3 className="comment-title">Your review</h3>

//           <label>
//             <NewComment
//               className="textarea-review"
//               rows="3"
//               value={comment}
//               placeholder="Type your review here..."
//               onChange={event => setComment(event.target.value)}
//             />
//           </label>
//           <div className="buttonwrapper">
//             <div>
//               <ButtonWatch
//                 type="submit"
//                 disabled={comment.length < 5 || comment.length > 300 ? true : false}
//                 onClick={handleNewComment}
//               >
//                 Submit
//               </ButtonWatch>
//             </div>
//             <div className="text-length">
//               <p className={comment.length < 5 || comment.length > 300 ? "red" : "black"}>{comment.length}</p><p>/300</p>
//             </div>
//           </div>
//         </form>
//       </div>

//       <ButtonShowReviews
//         type="button"
//         onClick={() => { handleReviews() }}
//       >
//         Show reviews
//       </ButtonShowReviews>
//       {reviews && (
//         <div className="cards-wrapper">
//           <div className="comment">

//             {comments[0] && comments.map((comment) => (
//               <>
//                 <article className="inside-cards">
//                   <p>{comment}</p>
//                   {/* <p>Username: {comment.userName}</p> */}
//                   <button typ="button" onClick={() => { handleRemove(comment.userName) }}>Remove</button>
//                 </article>

//                 {/* <StyledEdiText
//                   value={comment.comment}
//                   type="textarea"
//                   inputProps={{ rows: 5 }}
//                   // onSave={handleEdit}
//                   // editing={editing}
//                   hideIcons={true}
//                   saveButtonContent="Spara"
//                   cancelButtonContent="Avbryt"
//                   editButtonContent="Edit message"
//                 /> */}
//               </>
//             ))}
//           </div>
//         </div>
//       )}
//     </div >
//   )
// }

// export const StyledEdiText = styled(EdiText)`
//   div[editext="view-container"], div[editext="edit-container"] {
//     display: flex;
//     flex-direction: column;
//     margin: 10px;
//     align-items: flex-start;
//     font-size: 14px;
//     font-weight: 300;
//     color: #283E51;
//     @media(min-width: 768px) {
//     font-size: 16px;
//   }
//   }
//   textarea {
//     border: 2px solid #ecdfc8;
//     width: 245px;
//     height: 80px;
//     resize: none;
//     padding: 5px;
//     font-size: 14px;
//     margin: 5px 0;
//     @media(min-width: 768px) {
//     width: 465px;
//   }
//   }
//   button[editext="edit-button"] {
//     display:none;
//   }
//   button[editext="save-button"], button[editext="cancel-button"] {
//     background-color: #ecdfc8;
//     color: #283E51;
//     padding: 4px 8px;
//     font-family: 'Quicksand', sans-serif;
//     border-radius: 4px;
//     margin: 0 8px 0 0;
//     cursor: pointer;
//     border: 0.5px solid rgba(40, 62, 81, 0.5);
//     box-shadow: 2px 2px 4px rgba(40, 62, 81, 1); 
//     transition: background-color 0.2s ease-out;
//     @media(min-width: 768px) {
//     width: 65px;
//   }
//   }
// `