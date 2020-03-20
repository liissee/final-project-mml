import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MovieCards } from '../components/MovieCards';
import { UserList } from '../components/UserList'
import { ui } from '../reducers/ui'
import Icon from '@material-ui/core/Icon'
import styled from "styled-components/macro"
import {
  ButtonMore, ErrorMessage, MovieTitle, WrapperWelcomeBox
} from "../components/Styling"

// const url = "http://localhost:8080/secrets";
const url = 'https://final-movie-match.herokuapp.com/secrets'


export const UserPage = (props) => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesRated, setMoviesRated] = useState()
  const [movieStatus, setMovieStatus] = useState()
  const [chosenRating, setChosenRating] = useState("")

  const accessToken = useSelector((state) => state.users.accessToken)
  const page = useSelector((state) => state.ui.page)
  const selectedTab = useSelector((state) => state.ui.tab)
  const userId = useSelector((state) => state.users.userId)
  const dispatch = useDispatch()

  // Logged in or not?
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
    query = `?rating=${chosenRating}&page=${page}`
  }

  // Movies with rating
  useEffect(() => {
    if (!userId) return;
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/movies${query}`)
      // fetch(`http://localhost:8080/users/${userId}/movies${query}`)
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


  const handleSortOnRating = (ratingButton) => {
    setChosenRating(ratingButton)
    dispatch(ui.actions.setPage(1))
  }


  const Number = styled.p`
    color: black;
    font-weight: bold;
    left: 27px;
    position: absolute;
    top: 23px;
    z-index: 2;
  `
  const OtherButtonMore = styled(ButtonMore)`
    margin-bottom: 0;
    margin-left: 5px;
  `
  const Yellow = styled(Icon)`
    color: #ffb402;
    left: 5px;
    position: absolute;
    top: 5px;
    z-index: 1;
  `
  const YellowButtonMore = styled.button`
    background-color: transparent;
    border: none;
    height: 50px;
    position: relative;
    width: 50px;
  `

  const Sort = styled.div`
    align-items: center;
    display: flex;
  `
 

  return (
    // WATCHLIST
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
      // RATING
      {selectedTab === "rated" && (
        <WrapperWelcomeBox>
          <ErrorMessage>{errorMessage && <div>{errorMessage}</div>}</ErrorMessage>
          {!errorMessage &&
            <>
              <MovieTitle>Movies that you have rated</MovieTitle>
              <Sort>
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
              <MovieCards key={movie.movieId} id={movie.movieId} />
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
