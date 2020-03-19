import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import "pages/movielist.css"
import { Ratings } from "./Ratings"
import { WatchStatus } from "./WatchStatus"
import { ImageNotFound } from './Styling'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

export const Similar = () => {
  const { id } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
        // console.log(json.results)
      })
  }, [id])

  return (
    <div className="top-movie-list">
      <section className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-wrapper">
            {movie.poster_path && (
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id} />
            )}
            {!movie.poster_path && (
              <ImageNotFound
                src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Photo by Denise Jans on Unsplash" />
            )}
            <div className="hover-details">
              <div className="mobile-view ">
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <h1>{movie.original_title}</h1>
                </Link>
                <div className="rating">
                  <p>Released {movie.release_date}</p>
                  <Ratings movieId={movie.id} movieTitle={movie.title} />
                </div>
                <div>
                  <WatchStatus
                    movieId={movie.id}
                    movieTitle={movie.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div >
  )
}
