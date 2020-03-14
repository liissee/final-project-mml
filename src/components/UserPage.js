import React, { useState, useEffect } from 'react'
import {
  ButtonRating, Heading, MoviesRatedParagraph, MovieRatedRow, MovieTitleRated,
  WrapperWelcomeBox, Button, RatingStars
} from "./Styling"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MovieDetail2 } from './MovieDetail2';
import { UserList } from './UserList'
import { Ratings } from './Ratings'


const url = "http://localhost:8080/secrets";

// Fetch data with a GET request to our MongoDB database for an individual user 
export const UserPage = () => {

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesRated, setMoviesRated] = useState([])
  const [movieStatus, setMovieStatus] = useState([])
  // const [userList, setUserList] = useState([])
  const [chosenRating, setChosenRating] = useState("")
  const [page, setPage] = useState(1)
  const watchStatus = "watch"

  const searchResult = useSelector(state => state.users.users)
  console.log(searchResult)
  // const accessToken = window.localStorage.getItem("accessToken")
  //const userId = window.localStorage.getItem("userId")

  //Funkar att rendera om sidan när man loggar in men sparade filmer syns inte...
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const userName = useSelector((state) => state.users.userName)

  // const rating = useSelector((state) => state.movies.rating)

  // const userId = window.localStorage.getItem("userId")
  // const { userId } = useParams()


  const ratingStars = (rating) => {
    return "⭐️".repeat(rating)
  }

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

  // let sortByRating = `?rating=${chosenRating}`
  // chosenRating === "" ? "" : `?rating=${chosenRating}`



  let query = ""
  if (!chosenRating) {
    query = `?page=${page}`
  } else {
    query = `?rating=${chosenRating}&page=${page}`
  }

  //Movies with rating
  //CHECK WHY THIS FETCH IS NOT HAPPENING AT FIRST RENDER
  //Denna ska kunna köra både ${sortByRating} och pageChange
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/movies${query}`)
      .then(res => res.json())
      .then(json => {
        setMoviesRated(json)
        // console.log("ratedmovies:", json)
      })
  }, [chosenRating, page])

  // //All users. CREATED A SEPERATE COMPONENT!
  // useEffect(() => {
  //   if (!userId) return;
  //   fetch(`http://localhost:8080/users/${userId}/allUsers`)
  //     .then(res => res.json())
  //     .then(json => {
  //       setUserList(json)
  //       console.log("all users:", json)

  //     })
  // }, [userId])

  //Watch status
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/movies?watchStatus=${watchStatus}`)
      .then(res => res.json())
      .then(json => {
        setMovieStatus(json)
        // console.log("watchstatus:", json)
      })
  }, [userId])


  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {message && (
        <WrapperWelcomeBox>
          <Heading>User {userName}</Heading>
          Sort on rating:
          <ButtonRating onClick={(e) => setChosenRating(1)}> 1 </ButtonRating>
          <ButtonRating onClick={(e) => setChosenRating(2)}> 2 </ButtonRating>
          <ButtonRating onClick={(e) => setChosenRating(3)}> 3 </ButtonRating>
          <ButtonRating onClick={(e) => setChosenRating(4)}> 4 </ButtonRating>
          <ButtonRating onClick={(e) => setChosenRating(5)}> 5 </ButtonRating>
          <MoviesRatedParagraph>Movies that you have rated </MoviesRatedParagraph>
          {moviesRated.length && (
            moviesRated.map((movie) => (
              <MovieRatedRow
                key={movie.movieId}
              >
                <Link to={`/movies/${movie.movieId}`}>
                  <MovieTitleRated>{movie.movieTitle}</MovieTitleRated>
                </Link>
                <Ratings movieId={movie.id}
                  movieTitle={movie.title}
                  movieImage={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
                {/* <RatingStars>{ratingStars(movie.rating)}</RatingStars> */}
              </MovieRatedRow>
            ))
          )}
          <Button onClick={(e) => setPage(page + 1)}>More</Button>

          <div>
            <MoviesRatedParagraph>Movies on your watchlist</MoviesRatedParagraph>
            {movieStatus[0] && (
              movieStatus.map((movie) => (
                <MovieDetail2 key={movie.movieId} id={movie.movieId} />

                // <MovieRatedRow
                //   key={movie.movieId}
                // >
                //   <Link to={`/movies/${movie.movieId}`}>
                //     <MovieTitleRated>{movie.movieTitle}</MovieTitleRated>
                //     <img src={movie.movieImage} alt={movie.id} />
                //   </Link>
                // </MovieRatedRow>
              ))
            )}
          </div>
          <UserList />
          {/* <UserNames>Other users - compare ratings and watchlists</UserNames>
          {userList.map((user) => (
            <div
              key={user._id}
            >
              <Link to={`/users/${user._id}`}>
                <UserName>{user.name}</UserName>
              </Link>
            </div>
          ))} */}
        </WrapperWelcomeBox>
      )}
    </div>
  );
};