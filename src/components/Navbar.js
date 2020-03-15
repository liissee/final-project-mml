import React from "react";
import { Link } from 'react-router-dom'
import { Searchbar } from './Searchbar'
import { SearchUser } from './SearchUser'
import { Logout } from './Logout'
import { Hamburger } from 'components/Hamburger'
import { PopoverLogin } from 'components/PopoverLogin'
import { PopoverUserSearch } from 'components/PopoverUserSearch'
import Button from '@material-ui/core/Button';

import {
  HeadingStart, HeaderStartContainer, NavRightContainer,
  UserNameNav, MainStartContainer, SubNavbar, SubNavbarLeft,
  SubNavbarRight, WatchListLink
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
      <Hamburger />
      <HeaderStartContainer>
        <HeadingStart>
          <Link to={`/`}>🎬MOVIE MATCH</Link>
        </HeadingStart>
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
          <WatchListLink>Movies</WatchListLink>
        </Link>

        <Link to="/users/:id/movies">
          <WatchListLink>Watchlist</WatchListLink>
        </Link>

        <PopoverUserSearch />

      </SubNavbar>
    </MainStartContainer>
  )
}