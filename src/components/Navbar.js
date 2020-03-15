import React from "react";
import { Link } from 'react-router-dom'
import { Searchbar } from './Searchbar'
import { SearchUser } from './SearchUser'
import { Logout } from './Logout'
import { Hamburger } from 'components/Hamburger'
import { PopoverLogin } from 'components/PopoverLogin'
import { PopoverUserSearch } from 'components/PopoverUserSearch'
import {
  HeaderTitle, HeaderStartContainer, NavRightContainer,
  UserNameNav, MainStartContainer, SubNavbar, WatchListLink
} from "./Styling";
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  // const [errorMessage, setErrorMessage] = useState("");

  const accessToken = useSelector((state) => state.users.accessToken)
  const userName = useSelector((state) => state.users.userName)
  const userId = useSelector((state) => state.users.userId)

  return (
    <MainStartContainer>
      {/* <Hamburger /> */}
      <HeaderStartContainer>
        <HeaderTitle>
          <Link to={`/`}>🎬MOVIE MATCH</Link>
        </HeaderTitle>
        <Searchbar />
        <NavRightContainer>
          <Link to={`/users/${userId}/movies`}>
            <UserNameNav>{userName}</UserNameNav>
          </Link>
          {!accessToken &&
            <PopoverLogin />
          }
          {accessToken &&
            <Logout />
          }
        </NavRightContainer>
      </HeaderStartContainer>
      <SubNavbar>
        <Link to="/">
          <WatchListLink>MOVIES</WatchListLink>
        </Link>

        <Link to="/users/:id/movies">
          <WatchListLink>YOUR MOVIES</WatchListLink>
        </Link>

        <PopoverUserSearch />

      </SubNavbar>
    </MainStartContainer>
  )
}