import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { DropDownList } from "components/DropDownList"
import { MovieList, MovieWrapper, MovieListHover, Button } from "../Styling";
import { movies } from "reducers/movies"
import { searchResult } from "reducers/movies";
import { not_found } from "assets/not_found.jpeg"
import "pages/movielist.css"

// import not_found from "./assets/not_found"
// Import what we need to use

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

export const MoviesList = (props) => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const category = useSelector(state => state.movies.chosenCategory)
  const searchResult = useSelector(state => state.movies.movies)


  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
    setLoading(false)
  }, [category])

  if (loading) {
    return (
      <div className="loading-message">Movie page is loading...</div>
    )
  }

  if (!movies) {
    return (
      <div>{error}</div>
    )
  }



  let movieResults = movies
  if (searchResult.length > 0) {
    movieResults = searchResult
  }
  // console.log(searchResult)
  // Fetch data from API with a GET request
  // Render a list of movies depending on what the user has written in Searchbar

  //How to fetch more results, show page 2 etc..? 
  return (
    <div className="top-movie-list">
      {/* <AppContainer>
        <Swipe> {movieResults.map((movie) => (
          <Item>
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id} />
              )}
              {!movie.poster_path && (
                <img src={not_found} />
              )}
              <div className="hover-details">
                <h1>{movie.original_title}</h1>
                <p>Released {movie.release_date}</p>
              </div>
            </Link>
          </Item>
        ))}</Swipe>
      </AppContainer> */}
      <DropDownList />
      <section className="movie-list">
        {movieResults.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            {movie.poster_path && (
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id} />
            )}
            {!movie.poster_path && (
              <img src={not_found} />
            )}
            <div className="hover-details">
              <h1>{movie.original_title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
      {/* <Button type="button"
        onClick={() => {
          dispatch(movies.actions.setPageNumber())
        }}>
        Load more
      </Button> */}
    </div>
  )
}


//   return (
//     <div className="top-movie-list">
//       <DropDownList />
//       <MovieWrapper>
//         {movieResults.map((movie) => (
//           <MovieList>
//             <Link key={movie.id} to={`/movies/${movie.id}`}>
//               {movie.poster_path && (
//                 <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id} />
//               )}
//               {!movie.poster_path && (
//                 <p>Movie poster not found</p>
//                 // <img src={not_found} />
//               )}
//               <MovieListHover>
//                 <h1>{movie.original_title}</h1>
//                 <p>Released {movie.release_date}</p>
//               </MovieListHover>
//             </Link>
//           </MovieList>
//         ))}
//       </MovieWrapper>
//     </div>
//   )
// }
