import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { Ratings } from './Ratings';
import { WatchStatus } from './WatchStatus'
import { Similar } from './Similar';
import { movies } from '../reducers/movies'
import { Comments } from './Comments'
import {
  ActorImage, ActorList, ActorListWrap, ActorName, ActorWrap, ActorImageWrap, Genre, 
  ImageNotFound, MovieBackground, MovieDetailGenres, MovieDetailImage, MovieDetailRow, 
  MovieImdb, MovieInfo, MovieTitle, MovieOverview, RatingMovieWrap, ShowSimilar, 
  SimilarTitle, StarringTitle, WrapMovie, WrapMovieInfo, WrapRating, YourRating
} from "./Styling";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [cast, setCast] = useState([])
  const dispatch = useDispatch()

  const handleActor = (actor) => {
    dispatch(movies.actions.setActorName(actor))
  }

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status.code === 34) {
          setError("Movie not found")
        } else {
          setMovie(json)
        }
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setCast(json.cast.slice(0, 6))
        console.log(json.cast.slice(0, 6))
      })
  }, [id])

  if (loading) {
    return (
      <div className="loading-message">Movie page is loading...</div>
    )
  }

  if (!movie.title) {
    return (
      <div>{error}</div>
    )
  }
  

  return (
    <MovieBackground
      key={id}
    >
      <WrapMovie>
        <div>
        {movie.poster_path && (
          <MovieDetailImage
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title}
          />
        )}
        {!movie.poster_path && (
          <ImageNotFound
            src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Photo by Denise Jans on Unsplash" />
        )}
        </div>

        <WrapMovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetailGenres>
            {movie.genres.map((genre) => (
              <Genre key={genre.name}>{genre.name}</Genre>
            ))}
          </MovieDetailGenres>
          <MovieOverview>{movie.overview}</MovieOverview>
          <MovieDetailRow>
            <MovieInfo><span aria-label="emoji">⏱</span> {movie.runtime} min</MovieInfo>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MovieImdb>IMDb</MovieImdb>
            </a>
          </MovieDetailRow>
        </WrapMovieInfo>
      
      <WrapRating>
        <YourRating>Rate this movie</YourRating>
        <RatingMovieWrap>
          <Ratings
            movieId={movie.id}
            movieTitle={movie.title}
          />
          <WatchStatus
            movieId={movie.id}
            movieTitle={movie.title}
          />
        </RatingMovieWrap>
      </WrapRating>  
      </WrapMovie>

      <ActorListWrap>
        <StarringTitle>Starring </StarringTitle>
        <ActorList>
          {cast.map((actor) => (
            <ActorWrap >
              <Link key={actor.id} to={`/cast/${actor.id}`} onClick={(e) => handleActor(actor.name)}>
                <ActorName>{actor.name}</ActorName>
                {actor.profile_path && (
                  <ActorImageWrap>
                    <ActorImage
                      src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    />
                  </ActorImageWrap>
                )}
                {!actor.profile_path && (
                  <ActorImage
                    src="https://images.pexels.com/photos/1446948/pexels-photo-1446948.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Photo by Engin Akyurt from Pexels" />
                )}
              </Link>
            </ActorWrap>
          ))}
        </ActorList>
      </ActorListWrap>

      <Comments
        movieId={movie.id}
        movieTitle={movie.title}
      />

      <ShowSimilar>
        <SimilarTitle>Similar movies</SimilarTitle>
        <Similar />
      </ShowSimilar>
    </MovieBackground>
  )
}