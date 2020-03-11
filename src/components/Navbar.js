import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Searchbar } from './Searchbar'
import { Logout } from './Logout'
import { Hamburger } from 'components/Hamburger'
import { PopoverLogin } from 'components/PopoverLogin'
import {
  HeadingStart, HeaderStartContainer, MainStartContainer, Button
} from "./Styling";
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {
  // const [errorMessage, setErrorMessage] = useState("");
  // const accessToken = window.localStorage.getItem("accessToken")
  const accessToken = useSelector((state) => state.users.accessToken)

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
          {!accessToken &&
            <PopoverLogin />
          }
          {accessToken &&
            <Logout />
          }
          {/* {!accessToken &&
            <PopoverLogin />}
          {accessToken &&
            <Logout />} */}
          {/* {errorMessage && <div>{errorMessage}</div>} */}

          {/* <NavbarButton
              onClick={() => window.localStorage.removeItem("accessToken")}
              type="button"
            >
              {/* Should be linked to either log in or homepage */}
          {/* <Link className="link-text" to={`/`}>
              {accessToken ? "Log out" : "Sign in"}
            </Link>
            </NavbarButton> */}
        </SubNavbarRight>
      </SubNavbar>

    </MainStartContainer >

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

  // const NavbarButton = styled.button`
  // width:70px;
  // color: white;
  // background-color: transparent;
  // font-size: 16px;
  // font-weight: bold;
  // border:none;
  // &:hover {
  //   transform: scale(1,1);
  //   cursor: pointer;
  // `}
