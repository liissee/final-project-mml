import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


// Define initial state
const initialState = {
  movies: [],
  chosenCategory: "popular",
  actorName: ""
}


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

// Takes searchterm as a prop/argument and send search result to MoveList.js. 
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