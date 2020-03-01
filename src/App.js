import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movies } from 'reducers/movies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import "@blueprintjs/core/lib/css/blueprint.css";
import { Searchbar } from 'components/Searchbar'
import { MoviesList } from 'components/MoviesList'
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
        <Searchbar />
        <Route path="/" exact>
          <MoviesList />
        </Route>
        <main>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/register" component={Registration} />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}
