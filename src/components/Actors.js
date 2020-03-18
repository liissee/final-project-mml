import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "pages/movielist.css"
import { ImageNotFound, MovieTitle } from './Styling'
import styled from 'styled-components/macro'

export const Actors = () => {
  const { castId } = useParams()
  const name = useSelector(state => state.movies.actorName)

  const [person, setPerson] = useState([])

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  //https://api.themoviedb.org/3/person/192/movie_credits?api_key=363444609247127238629594b245e069&language=en-US
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.cast)
      })
  }, [castId])


  return (
    <div className="top-movie-list">
      <MovieTitle>Movies with {name}</MovieTitle>
      <section className="movie-list">
        {person.map((persons) => (
          <Link className="movie-wrapper" key={persons.credit_id} to={`/movies/${persons.id}`}>
            {persons.poster_path && (
              <img src={`https://image.tmdb.org/t/p/w342${persons.poster_path}`} alt={persons.title} />
            )}
            {!persons.poster_path && (
              <ImageNotFound src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Photo by Denise Jans on Unsplash" />
            )}
            <div className="hover-details">
              <div className="mobile-view ">
                <h1>{persons.title}</h1>
                <p>Character: {persons.character}</p>
                <p>Released {persons.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}


