import React from 'react'
import { Wrapper, WelcomeMovieRow } from "./Styling"
// Import what we need to use

// Fetch data with a GET request to our MongoDB database for an individual user 
export const UserPage = () => {
  const [movies, setMovies] = useState([])
  
  // We need to create an app.get-route in the backend for ratedMovies
  // Also we should think about how to fetch data from another user, randomly
  // choosing an id in our database
  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/movies`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      })
  }, [])

  return (
    <Wrapper>
          <Heading>Welcome!</Heading>
          <p>Here is a list of the movies that you have rated</p>
          <section className="movies-list">

            {movies.map((movie) => (
              <WelcomeMovieRow
                key={movie.id}
              >
                <Link to={`movies/${movie.id}`}>
                  <h2 className="movie-title">{movie.title}</h2>
                </Link>
              </WelcomeMovieRow>
            ))}
          </section>
        </Wrapper>
  );
};