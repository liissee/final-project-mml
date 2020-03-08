import React from 'react'
// import { Route, Link } from 'react-router-dom'
// import { Login } from './Login'
// import { Registration } from './Registration'
import { Searchbar } from './Searchbar'
import { Hamburger } from 'components/Hamburger'
import {
  HeadingStart, HeaderStartContainer, MainStartContainer
} from "./Styling";


// Define <Route path=""></Route> and include links
export const Navbar = () => {
  return (
    <MainStartContainer>
      <Hamburger />
      <HeaderStartContainer>
        <HeadingStart>MATCH ❤️ MOVIES</HeadingStart>
        <Searchbar />
      </HeaderStartContainer>
    </MainStartContainer>

  )
}



