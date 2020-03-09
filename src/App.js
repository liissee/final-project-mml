import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movies } from 'reducers/movies'
import { users } from 'reducers/users'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { StartPage } from 'components/StartPage'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import "@blueprintjs/core/lib/css/blueprint.css";
import { MoviesList } from 'components/MoviesList'
import { Welcome } from 'components/Welcome'
import { Navbar } from 'components/Navbar'
import { MovieDetail } from 'components/MovieDetail'
import { UserPage } from 'components/UserPage'
import { OtherUser } from 'components/OtherUser'

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
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/movies/:id" component={MovieDetail} />
            <Route exact path="/users/:id/movies" component={UserPage} />
            <Route exact path="/users/:userId" component={OtherUser} />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

// <BrowserRouter>
// <Searchbar />
// <main>
//   <Switch>
//     <Route exact path="/login" component={Login} />
//     <Route exact path="/welcome" component={Welcome} />
//     <Route exact path="/register" component={Registration} />
//   </Switch>
// </main>