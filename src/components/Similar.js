import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Ratings } from './Ratings'
import { WatchStatus } from './WatchStatus'
import 'pages/movielist.css'
import { 
  HoverDetails, ListImage, MobileView, MovieInfo, 
  MovieList, MovieTitle, MovieWrapper, RatingBox
} from '../components/Styling'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


export const Similar = () => {
  const { id } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      })
  }, [id])

  const cutOutDate = (date) => {
    return date.substring(0, 4)
  }

  return (
    <div className="top-movie-list">
      <MovieList className="movie-list">
        {movies.map((movie) => (
          <MovieWrapper key={movie.id} className="movie-wrapper">
            {movie.poster_path && (
              <ListImage src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id} />
            )}
            {!movie.poster_path && (
              <ListImage
                src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Photo by Denise Jans on Unsplash" />
            )}
            <HoverDetails className="hover-details">
              <MobileView className="mobile-view ">
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                </Link>
                <RatingBox className="rating">
                  <MovieInfo>{cutOutDate(movie.release_date)}</MovieInfo>
                  <Ratings movieId={movie.id} movieTitle={movie.title} />
                </RatingBox>
                <>
                  <WatchStatus
                    movieId={movie.id}
                    movieTitle={movie.title} />
                </>
              </MobileView>
            </HoverDetails>
          </MovieWrapper>
        ))}
      </MovieList>
    </div >
  )
}