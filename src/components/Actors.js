import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "components/movielist.css"
import "components/castdetails.css"


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


  // //https://api.themoviedb.org/3/credit/52fe4210c3a36847f800135f?api_key=363444609247127238629594b245e069
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/credit/52fe4210c3a36847f800135f?api_key=${API_KEY}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setActorName(json.person)
  //       console.log("second fetch", json)
  //     })
  // }, [])

  return (
    <div className="cast-details-top">
      <h1>Movies with {name}</h1>
      <section className="cast-details">
        {person.map((persons) => (
          <Link key={persons.credit_id} to={`/movies/${persons.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${persons.poster_path}`} alt={persons.id} />
            <div className="cast-details-summary">
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

