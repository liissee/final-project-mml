import { createSlice } from '@reduxjs/toolkit'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


// Define initial state, what should be included?
const initialState = {
  movies: []
}

// Discuss which reducers and actions that should be included
export const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.movies = action.payload
      console.log(action.payload)
    }
  }
})

//takes searchterm as a prop/argument and send search result to MovieList.js. 
export const searchResult = (searchTerm) => {
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(json => {
        dispatch(movies.actions.setSearchTerm(json.results))
        console.log(json)
      })
  }
}