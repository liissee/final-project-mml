import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movies } from 'reducers/movies'
import { users } from 'reducers/users'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import "@blueprintjs/core/lib/css/blueprint.css";
import { MoviesList } from 'components/MoviesList'
// import { Welcome } from 'components/NOT_USED/Welcome'
import { Navbar } from 'components/Navbar'
import { MovieDetail } from 'components/MovieDetail'
import { UserPage } from 'components/UserPage'
import { OtherUser } from 'components/OtherUser'
import { Similar } from 'components/Similar'
import { Actors } from 'components/Actors'

const reducer = combineReducers({
  movies: movies.reducer,
  users: users.reducer
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
        <main>
          <Switch>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/welcome" component={Welcome} /> */}
            <Route exact path="/register" component={Registration} />
            <Route exact path="/movies/:id" component={MovieDetail} />
            <Route exact path="/users/:id/movies" component={UserPage} />
            <Route exact path="/users/:userId" component={OtherUser} />
            <Route exact path="/similar/:id" component={Similar} />
            <Route exact path="/cast/:castId" component={Actors} />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

