import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { movies } from 'reducers/movies'
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


const reducer = combineReducers({
  movies: movies.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact>
          <Navbar />
          {/* <StartPage /> */}
          <MoviesList />
        </Route>
        <main>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/movies/:id" component={MovieDetail} />
            <Route exact path="/users/:id/movies" component={UserPage} />
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