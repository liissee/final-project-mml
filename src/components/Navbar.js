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
import { useSelector, useDispatch } from 'react-redux'
import { ui } from '../reducers/ui'
import { movies } from '../reducers/movies'

export const Navbar = (props) => {
  // const [errorMessage, setErrorMessage] = useState("");

  const accessToken = useSelector((state) => state.users.accessToken)
  const userName = useSelector((state) => state.users.userName)
  const userId = useSelector((state) => state.users.userId)
  const selectedTab = useSelector((state) => state.ui.tab)

  const dispatch = useDispatch()

  const handleTabChange = (tab) => {
    dispatch(ui.actions.setTab(tab))
    dispatch(ui.actions.setPage(1))
  }

  return (
    <MainStartContainer>
      {/* <Hamburger /> */}
      <HeaderStartContainer>
        <HeaderTitle>
          <Link to={`/`} onClick={() => { handleTabChange("movies"); dispatch(movies.actions.setSearchTerm("")) }}>movie </Link>
          <Link to={`/`} onClick={() => { handleTabChange("movies"); dispatch(movies.actions.setSearchTerm("")) }}>match.</Link>
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
        <Link to="/" onClick={() => handleTabChange("movies")}>
          <WatchListLink>MOVIES</WatchListLink>
        </Link>

        <Link to="/users/:id/movies" onClick={() => handleTabChange("watch")}>
          <WatchListLink>Watchlist</WatchListLink>
        </Link>
        <Link to="/users/:id/movies" onClick={() => handleTabChange("rated")}>
          <WatchListLink>All rated</WatchListLink>
        </Link>

        <Link to="/users/:id/movies" onClick={() => handleTabChange("users")}>
          <WatchListLink>Other users</WatchListLink>
        </Link>
        <PopoverUserSearch />
      </SubNavbar>
    </MainStartContainer >
  )
}