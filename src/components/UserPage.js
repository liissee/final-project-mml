import React, { useState, useEffect } from 'react'
import {
  ButtonMore, MovieInfo, MovieTitle, WrapperWelcomeBox, ErrorMessage
} from "./Styling"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MovieCards } from './MovieCards';
import { UserList } from './UserList'
import { ui } from '../reducers/ui'


//USER-PAGE
const url = "http://localhost:8080/secrets";

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
    console.log(`http://localhost:8080/users/${userId}/movies${query}`)
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
            `No movies in your watchlist yet`
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
            <div>
              <MovieTitle>Movies that you have rated</MovieTitle>
              <MovieInfo>Sort by rating</MovieInfo>
              <ButtonMore onClick={(e) => handleSortOnRating(1)}> 1 </ButtonMore>
              <ButtonMore onClick={(e) => handleSortOnRating(2)}> 2 </ButtonMore>
              <ButtonMore onClick={(e) => handleSortOnRating(3)}> 3 </ButtonMore>
              <ButtonMore onClick={(e) => handleSortOnRating(4)}> 4 </ButtonMore>
              <ButtonMore onClick={(e) => handleSortOnRating(5)}> 5 </ButtonMore>
              <ButtonMore onClick={(e) => handleSortOnRating("")}> All </ButtonMore>
            </div>
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