import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { movies } from 'reducers/movies'
import { ui } from 'reducers/ui'
import { users } from 'reducers/users'
import { Actors } from 'components/Actors'
import { Login } from 'pages/Login'
import { MovieDetail } from 'components/MovieDetail'
import { MoviesList } from 'pages/MoviesList'
import { Navbar } from 'components/Navbar'
import { OtherUser } from 'pages/OtherUser'
import { Registration } from 'pages/Registration'
import { Similar } from 'components/Similar'
import { UserPage } from 'pages/UserPage'
import { UserSearchResult } from 'components/UserSearchResult'
import '@blueprintjs/core/lib/css/blueprint.css'
import { Main } from 'components/Styling'

const reducer = combineReducers({
  movies: movies.reducer,
  users: users.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact>
          <MoviesList />
        </Route>
        {/* <Main> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/movies/:id" component={MovieDetail} />
          <Route exact path="/users/:id/movies" component={UserPage} />
          <Route exact path="/search" component={UserSearchResult} />
          <Route exact path="/users/:userId" component={OtherUser} />
          <Route exact path="/similar/:id" component={Similar} />
          <Route exact path="/cast/:castId" component={Actors} />
        </Switch>
        {/* </Main> */}
      </BrowserRouter>
    </Provider>
  )
}