import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "components/movielist.css"


export const Actors = () => {
  const { castId } = useParams()
  const name = useSelector(state => state.movies.actorName)

  console.log(castId)
  const [person, setPerson] = useState([])
  // const [actorName, setActorName] = useState("")

  console.log(name)
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  //https://api.themoviedb.org/3/person/192/movie_credits?api_key=363444609247127238629594b245e069&language=en-US
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.cast)
        console.log(json.cast)
      })
  }, [castId])


  return (
    <div className="top-movie-list">
      <h1>Movies with {name}</h1>
      <section className="movie-list">
        {person.map((persons) => (
          <Link className="movie-wrapper" key={persons.credit_id} to={`/movies/${persons.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${persons.poster_path}`} alt={persons.id} />
            <div className="hover-details">
              <h2>{persons.title}</h2>
              <p>Character: {persons.character}</p>
              <p>Released {persons.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

