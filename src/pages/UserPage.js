import React, { useState, useEffect } from 'react'
import {
  ButtonMore, MovieInfo, MovieTitle, WrapperWelcomeBox, ErrorMessage
} from "../components/Styling"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MovieCards } from '../components/MovieCards';
import { UserList } from '../components/UserList'
import { ui } from '../reducers/ui'
import Icon from '@material-ui/core/Icon'
import styled from "styled-components/macro"

//USER-PAGE
const url = "http://localhost:8080/secrets";
// const url = 'https://final-movie-match.herokuapp.com/secrets'
// Fetch data with a GET request to our MongoDB database for an individual user 
export const UserPage = (props) => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesRated, setMoviesRated] = useState()
  const [movieStatus, setMovieStatus] = useState()
  const [chosenRating, setChosenRating] = useState("")
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()


  //Funkar att rendera om sidan när man loggar in men sparade filmer syns inte...
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const userName = useSelector((state) => state.users.userName)
  const selectedTab = useSelector((state) => state.ui.tab)
  const page = useSelector((state) => state.ui.page)



  //Logged in or not?
  useEffect(() => {
    setErrorMessage("");
    fetch(url, {
      method: "GET",
      headers: { Authorization: accessToken }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else if (!res.ok) {
          throw new Error("You need to sign in to view this page", JSON);
        }
      })
      .then(json => {
        setMessage(json.secret)
        setErrorMessage('');
      })
      .catch(err => {
        setErrorMessage(err.message);
      });
  }, [accessToken]);


  let query = ""
  console.log("SELECTED TAB: ", selectedTab)
  if (selectedTab === "watch") {
    query = `?watchStatus=true&page=${page}`
    console.log("WAAAATCH")
  }
  else if (!chosenRating && selectedTab === "rated") {
    query = `?rating=1&rating=2&rating=3&rating=4&rating=5&page=${page}`
  }
  else if (chosenRating) {
    // setChosenList("rating")
    query = `?rating=${chosenRating}&page=${page}`
  }
  // else if (selectedTab === "rated") {
  //   console.log("RATEEEE")
  //   query = `?rating=${chosenRating}&page=${page}`
  // }


  //Movies with rating
  //CHECK WHY THIS FETCH IS NOT HAPPENING AT FIRST RENDER
  //Denna ska kunna köra både ${sortByRating} och pageChange
  useEffect(() => {
    if (!userId) return;
    // fetch(`https://final-movie-match.herokuapp.com/users/${userId}/movies${query}`)
    fetch(`http://localhost:8080/users/${userId}/movies${query}`)
      .then(res => res.json())
      .then(json => {
        if (selectedTab === "rated") {
          setMoviesRated(json)
          console.log("ratedmovies:", json)
          console.log("query:", query)
        }
        else if (selectedTab === "watch") {
          setMovieStatus(json)
          console.log("watchstatus:", json)
        }

      })
  }, [chosenRating, page, selectedTab])

  console.log("moviesRated", moviesRated)

  // //Watch status
  // useEffect(() => {
  //   if (!userId) return;
  //   fetch(`http://localhost:8080/users/${userId}/movies?watchStatus=true`)
  //     .then(res => res.json())
  //     .then(json => {
  //       setMovieStatus(json)
  //       console.log("watchstatus:", json)

  //     })
  // }, [userId, page, selectedTab])
  // console.log("MovieStatus:", movieStatus)


  const handleSortOnRating = (ratingButton) => {
    setChosenRating(ratingButton)
    dispatch(ui.actions.setPage(1))
  }

  const Yellow = styled(Icon)`
  color: #ffb402;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 1;
  `

  const Number = styled.p`
  position: absolute;
  left: 27px;
  top: 23px;
  z-index: 2;
  color: black;
  font-weight: bold;

  `
  const YellowButtonMore = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  height: 50px;
  width: 50px;
  `

  const Sort = styled.div`
display: flex;
align-items: center;
`
  const OtherButtonMore = styled(ButtonMore)`
margin-bottom: 0;
margin-left: 5px;
`

  return (
    //WATCHLIST
    <>
      {selectedTab === "watch" && (
        <WrapperWelcomeBox>
          <ErrorMessage>{errorMessage && <div>{errorMessage}</div>}</ErrorMessage>
          {!errorMessage && <MovieTitle>Your watchlist</MovieTitle>}
          {movieStatus && !movieStatus.message && (
            movieStatus.map((movie) => (
              <MovieCards key={movie.movieId} id={movie.movieId} />
            ))
          )}
          {movieStatus && movieStatus.message && (
            <ErrorMessage>`No movies in your watchlist yet`</ErrorMessage>
          )}
          {!errorMessage &&
            <WrapperWelcomeBox>
              <ButtonMore onClick={(e) => dispatch(ui.actions.setPage(page + 1))}>Show more</ButtonMore>
            </WrapperWelcomeBox>}
        </WrapperWelcomeBox>
      )}
      {/* //RATING */}
      {selectedTab === "rated" && (
        <WrapperWelcomeBox>
          <ErrorMessage>{errorMessage && <div>{errorMessage}</div>}</ErrorMessage>
          {!errorMessage &&
            <>
              <MovieTitle>Movies that you have rated</MovieTitle>
              <Sort>
                {/* <MovieInfo>Sort by rating</MovieInfo> */}
                <YellowButtonMore onClick={(e) => handleSortOnRating(1)}><Number>1</Number><Yellow style={{ fontSize: 50 }}>star</Yellow></YellowButtonMore>
                <YellowButtonMore onClick={(e) => handleSortOnRating(2)}><Number>2</Number><Yellow style={{ fontSize: 50 }}>star</Yellow></YellowButtonMore>
                <YellowButtonMore onClick={(e) => handleSortOnRating(3)}><Number>3</Number><Yellow style={{ fontSize: 50 }}>star</Yellow></YellowButtonMore>
                <YellowButtonMore onClick={(e) => handleSortOnRating(4)}><Number>4</Number><Yellow style={{ fontSize: 50 }}>star</Yellow></YellowButtonMore>
                <YellowButtonMore onClick={(e) => handleSortOnRating(5)}><Number>5</Number><Yellow style={{ fontSize: 50 }}>star</Yellow></YellowButtonMore>
                <OtherButtonMore onClick={(e) => handleSortOnRating("")}> All </OtherButtonMore>
              </Sort>
            </>
          }
          {moviesRated && !moviesRated.message && (
            moviesRated.map((movie) => (
              // movie.rating && (
              <MovieCards key={movie.movieId} id={movie.movieId} />
              // )
            )
            ))}
          {moviesRated && moviesRated.message && (
            `${moviesRated.message} with this score`
          )}
          {!errorMessage &&
            <WrapperWelcomeBox>
              <ButtonMore onClick={(e) => dispatch(ui.actions.setPage(page + 1))}>Show more</ButtonMore>
            </WrapperWelcomeBox>}
        </WrapperWelcomeBox>
      )}
      {/* //USERLIST */}
      {selectedTab === "users" && (
        <WrapperWelcomeBox>
          <ErrorMessage>{errorMessage && <div>{errorMessage}</div>}</ErrorMessage>
          {!errorMessage &&
            <UserList />}
        </WrapperWelcomeBox>
      )}
    </>
  )
}
  // return (
  //   <div>
  //     {errorMessage && <div>{errorMessage}</div>}
  //     {message && (
  //       <WrapperWelcomeBox>
  //         {/* <TabNav /> */}
  //         <Heading>User {userName}</Heading>
  //         Sort on rating:
  //         <ButtonRating onClick={(e) => setChosenRating(1)}> 1 </ButtonRating>
  //         <ButtonRating onClick={(e) => setChosenRating(2)}> 2 </ButtonRating>
  //         <ButtonRating onClick={(e) => setChosenRating(3)}> 3 </ButtonRating>
  //         <ButtonRating onClick={(e) => setChosenRating(4)}> 4 </ButtonRating>
  //         <ButtonRating onClick={(e) => setChosenRating(5)}> 5 </ButtonRating>
  //         <MoviesRatedParagraph>Movies that you have rated </MoviesRatedParagraph>
  //         {moviesRated.length && (
  //           moviesRated.map((movie) => (
  //             <MovieDetail2 key={movie.movieId} id={movie.movieId} />
  //           ))
  //         )}
  //         <Button onClick={(e) => setPage(page + 1)}>More</Button>

  //         <div>
  //           <MoviesRatedParagraph>Movies on your watchlist</MoviesRatedParagraph>
  //           {movieStatus[0] && (
  //             movieStatus.map((movie) => (
  //               <MovieDetail2 key={movie.movieId} id={movie.movieId} />
  //             ))
  //           )}
  //         </div>
  //         <UserList />
  //       </WrapperWelcomeBox>
  //     )}
  //   </div>
  // );
// };