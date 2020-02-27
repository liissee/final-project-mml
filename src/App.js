import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movies } from 'reducers/movies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Import the components that we want to render

const reducer = combineReducers({
  movies: movies.reducer
})

const store = configureStore({ reducer })

// Define <Route path="some path">some component</Route> within <Switch></Switch>
// Also write the name of the imported components we want to render
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main> 
        <Switch>

  
        </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

// Delete this?
// This was initially within return()
// <div>
//   Find me in src/app.js!
// </div>