import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { UserSearchResult } from "./UserSearchResult"
import { DropDownList } from "components/DropDownList"
import { not_found } from "assets/not_found.jpeg"
import "components/movielist.css"
import { Ratings } from "./Ratings"
import { Button, MovieListContainer, MovieWrapper, MovieWrapperLink, HoverDetails } from './Styling'

// import not_found from "./assets/not_found"
// Import what we need to use

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

export const MoviesList = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const category = useSelector(state => state.movies.chosenCategory)
  const searchResult = useSelector(state => state.movies.movies)
  const userSearch = useSelector(state => state.users.users)
  //const accessToken = window.localStorage.getItem("accessToken")


  //Pagination
  let query = `&page=${page}`

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US${query}`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
    setLoading(false)
  }, [category, page])

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
  // Fetch data from API with a GET request
  // Render a list of movies depending on what the user has written in Searchbar

  //How to fetch more results, show page 2 etc..? 
  return (
    <>
      <DropDownList />
      <MovieListContainer>
        {userSearch[0] &&
          <UserSearchResult />
        }
        {movieResults &&
          movieResults.map((movie) => {
            return (
              <MovieWrapper className="movie-wrapper" key={movie.id}>
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                )}
                {!movie.poster_path && (
                  <img src={not_found} alt={movie.title} />
                )}
                <HoverDetails>
                  <MovieWrapperLink as={Link} key={movie.id} to={`/movies/${movie.id}`}>
                    <h1>{movie.original_title}</h1>
                    <p>Released {movie.release_date}</p>
                  </MovieWrapperLink>
                  <Ratings
                    movieId={movie.id}
                    movieTitle={movie.title}
                    movieImage={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
                </HoverDetails>
              </MovieWrapper>
            )
          }
          )}

      </MovieListContainer>
      <Button onClick={(e) => setPage(page + 1)}>More</Button>
    </>
  )
}

// return (
//   <div className="top-movie-list">
//     <DropDownList />
//     <section className="movie-list">
//       {userSearch[0] &&
//         <UserSearchResult />
//       }
//       {movieResults &&
//         movieResults.map((movie) => {
//           console.log(movie)
//           return (
//             <div key={movie.id} className="movie-wrapper">
//               {movie.poster_path && (
//                 <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
//               )}
//               {!movie.poster_path && (
//                 <img src={not_found} alt={movie.title} />
//               )}
//               <div className="hover-details">
//                 <Link key={movie.id} to={`/movies/${movie.id}`}>
//                   <h1>{movie.original_title}</h1>
//                   <p>Released {movie.release_date}</p>
//                 </Link>
//                 <Ratings
//                   movieId={movie.id}
//                   movieTitle={movie.title}
//                   movieImage={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
//               </div>
//             </div>
//           )
//         }
//         )}

//     </section>
//     <Button onClick={(e) => setPage(page + 1)}>More</Button>
//     {/* <Button type="button"
//         onClick={() => {
//           dispatch(movies.actions.setPageNumber())
//         }}>
//         Load more
//       </Button> */}
//   </div >
// )
// }