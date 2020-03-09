import React, { useState } from "react";
import { Route, Link } from 'react-router-dom'
// import { Login } from './Login'
// import { Registration } from './Registration'
import { Searchbar } from './Searchbar'
import { Hamburger } from 'components/Hamburger'
import {
  HeadingStart, HeaderStartContainer, MainStartContainer, Button
} from "./Styling";
import styled from 'styled-components/macro'


export const Navbar = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const accessToken = window.localStorage.getItem("accessToken")
  const userId = window.localStorage.getItem("userId")



  return (
    <MainStartContainer>
      <Hamburger />
      <HeaderStartContainer>
        <HeadingStart><Link class-name="link-text" to={`/`}>MATCH ❤️ MOVIES</Link></HeadingStart>
        <Searchbar />
      </HeaderStartContainer>
      <SubNavbar>
        <SubNavbarLeft>
        </SubNavbarLeft>
        <SubNavbarRight>
          <div>
            {/* {errorMessage && <div>{errorMessage}</div>} */}

            <NavbarButton
              onClick={() => window.localStorage.removeItem("accessToken")}
              type="button"
            >
              {/* Should be linked to either log in or homepage */}
              <Link className="link-text" to={`/`}>
                {accessToken ? "Log out" : "Sign in"}
              </Link>
            </NavbarButton>

          </div>
        </SubNavbarRight>
      </SubNavbar>

    </MainStartContainer>

  )
}
const SubNavbar = styled.div`
height: 50px;
background-color: firebrick;
display: flex;
justify-content: space-between;
`
const SubNavbarLeft = styled.div`
`
const SubNavbarRight = styled.div`
`

const NavbarButton = styled.button`
width:70px;
color: white;
background-color: transparent;
font-size: 16px;
font-weight: bold;
border:none;
&:hover {
  transform: scale(1,1);
  cursor: pointer;
}
`

{/* 
display: block;
margin: 30px 0;
height: 54px;
width: 100%;
background: #33cc77;
border: 1px solid darken(#33cc77,0.1);
border-top-color: transparent;
border-radius: 3px;
font-size: 16px;
font-weight: bold;
color: #fff;
text-shadow: -1px -1px rgba(0,0,0,0.1);
transition: background $standard-transition;
&:hover {
  background: lighten(#33cc77,10%);
  cursor: pointer;
} */}

//LINK TO: log in, log out, register
// Movies
// your watchlist
// users? 
//



