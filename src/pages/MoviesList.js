import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DropDownList } from "components/DropDownList"
import { Ratings } from "../components/Ratings"
import { WatchStatus } from '../components/WatchStatus'
import "pages/movielist.css"
import { ButtonContainer, ButtonMore, ErrorMessage } from '../components/Styling'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


export const MoviesList = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const category = useSelector(state => state.movies.chosenCategory)
  const searchResult = useSelector(state => state.movies.movies)

  // Pagination
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
      <ErrorMessage color="white">Movie page is loading...</ErrorMessage>
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
                  <div className="mobile-view ">
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                      <h1>{movie.original_title}</h1>
                      <p>Released {movie.release_date}</p>
                    </Link>
                    <div className="rating">
                      <Ratings
                        movieId={movie.id}
                        movieTitle={movie.title}
                      />
                    </div>
                    <div>
                      <WatchStatus
                        movieId={movie.id}
                        movieTitle={movie.title} />
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )}
      </section>
      <ButtonContainer>
        <ButtonMore onClick={(e) => setPage(page + 1)}>Show more</ButtonMore>
      </ButtonContainer>
    </div >
  )
}