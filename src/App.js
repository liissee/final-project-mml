import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movies } from 'reducers/movies'
import { users } from 'reducers/users'
import { ui } from 'reducers/ui'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import "@blueprintjs/core/lib/css/blueprint.css";
import { MoviesList } from 'components/MoviesList'
import { Navbar } from 'components/Navbar'
import { MovieDetail } from 'components/MovieDetail'
import { UserPage } from 'components/UserPage'
import { OtherUser } from 'components/OtherUser'
import { Similar } from 'components/Similar'
import { Actors } from 'components/Actors'
import { UserSearchResult } from "components/UserSearchResult"
import { Main } from "components/Styling"

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
        <Main>
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
        </Main>
      </BrowserRouter>
    </Provider>
  )
}