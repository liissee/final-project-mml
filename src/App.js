import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movies } from 'reducers/movies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import { Welcome } from 'components/Welcome'
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
            <Route exact path="/" component={Login} />
            <Route exact path="/secrets" component={Welcome} />
            <Route exact path="/register" component={Registration} />
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