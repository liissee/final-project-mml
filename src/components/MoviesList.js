import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
// Import what we need to use

export const MoviesList = (props) => {

  const movieList = useSelector(state => state.movies.movies)

  console.log(movieList)
  // Fetch data from API with a GET request
  // Render a list of movies depending on what the user has written in Searchbar

  //How to fetch more results, show page 2 etc..? 
  return (
    <div className="top-movie-list">
      <section className="movie-list">
        {movieList.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id} />
            <div className="hover-details">
              <h1>{movie.original_title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}