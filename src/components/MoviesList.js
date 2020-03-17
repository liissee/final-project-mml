
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { DropDownList } from "components/DropDownList"
import "components/movielist.css"
import { Ratings } from "./Ratings"
import { Button } from './Styling'
import { WatchStatus } from './WatchStatus';


const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

export const MoviesList = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const category = useSelector(state => state.movies.chosenCategory)
  const searchResult = useSelector(state => state.movies.movies)
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


  //How to fetch more results, show page 2 etc..? 
  return (
    <div className="top-movie-list">
      <DropDownList />
      <section className="movie-list">
        {movieResults &&
          movieResults.map((movie) => {
            return (
              <div key={movie.id} className="movie-wrapper">
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                )}
                {!movie.poster_path && (
                  <img src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Photo by Denise Jans on Unsplash" />
                )}
                <div className="hover-details">
                  <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <h1>{movie.original_title}</h1>
                    <p>Released {movie.release_date}</p>
                  </Link>
                  <Ratings
                    movieId={movie.id}
                    movieTitle={movie.title}
                  />
                  <WatchStatus
                    movieId={movie.id}
                    movieTitle={movie.title} />
                </div>
              </div>
            )
          }
          )}
      </section>
      <Button onClick={(e) => setPage(page + 1)}>More</Button>
    </div >
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