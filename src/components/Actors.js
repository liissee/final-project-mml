import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import 'pages/movielist.css'
import { ImageNotFound, ButtonContainer, ButtonMore, ErrorMessage, HoverDetails, MovieList, MovieWrapper, MovieTitle, MovieInfo, ListImage, RatingBox, MobileView } from '../components/Styling'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


export const Actors = () => {
  const { castId } = useParams()
  const name = useSelector(state => state.movies.actorName)
  const [person, setPerson] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.cast)
      })
  }, [castId])

  const cutOutDate = (date) => {
    return date.substring(0, 4)
  }

  return (
    <div className="top-movie-list">
      <MovieTitle>Movies with {name}</MovieTitle>
      <MovieList className="movie-list">
        {person.map((persons) => (
          <MovieWrapper>

            {persons.poster_path && (
              <ListImage src={`https://image.tmdb.org/t/p/w342${persons.poster_path}`} alt={persons.title} />
            )}
            {!persons.poster_path && (
              <ListImage src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Photo by Denise Jans on Unsplash" />
            )}
            <HoverDetails className="hover-details">
              <MobileView className="mobile-view">
                <Link key={persons.credit_id} to={`/movies/${persons.id}`}>
                  <MovieTitle>{persons.title}</MovieTitle>
                </Link>
                <MovieInfo>Character: {persons.character}</MovieInfo>
                <MovieInfo>{cutOutDate(persons.release_date)}</MovieInfo>
              </MobileView>
            </HoverDetails>

          </MovieWrapper>
        ))}
      </MovieList>
    </div>
  )
}