import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


// Define initial state, what should be included?
const initialState = {
  movies: [],
  chosenCategory: "popular",
  actorName: ""
}

// Discuss which reducers and actions that should be included
export const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.movies = action.payload
    },
    setCategory: (state, action) => {
      state.chosenCategory = action.payload
    },
    setActorName: (state, action) => {
      state.actorName = action.payload
    }
  }
})
//takes searchterm as a prop/argument and send search result to MoveList.js. 
export const searchResult = (searchTerm, pageNumber) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${pageNumber}&include_adult=false`)
      .then(res => res.json())
      .then(json => {
        dispatch(movies.actions.setSearchTerm(json.results))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// export const handleActor = (actor) => {
//   return dispatch => {
//     dispatch(movies.actions.setActorName(actor))
//   }
// }