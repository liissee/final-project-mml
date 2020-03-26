import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Hamburger } from 'components/Hamburger'
import { Logout } from './Logout'
import { PopoverLogin } from 'components/PopoverLogin'
import { PopoverUserSearch } from 'components/PopoverUserSearch'
import { Searchbar } from './Searchbar'
import { movies } from '../reducers/movies'
import { ui } from '../reducers/ui'
import {
  HeaderStartContainer, HeaderTitle,
  NavRightContainer, SubNavbar, UserNameNav, WatchListLink
} from './Styling'


export const Navbar = () => {
  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)
  const userName = useSelector((state) => state.users.userName)
  const selectedTab = useSelector((state) => state.ui.tab)

  const dispatch = useDispatch()

  const handleTabChange = (tab) => {
    dispatch(ui.actions.setTab(tab))
    dispatch(ui.actions.setPage(1))
  }


  return (
    <>

      <HeaderStartContainer>
        <Hamburger />
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
        <Link to="/" onClick={() => { handleTabChange("movies"); dispatch(movies.actions.setSearchTerm("")) }}>
          <WatchListLink className={selectedTab === "movies" ? 'active' : ''}>MOVIES</WatchListLink>
        </Link>

        <Link to="/users/:id/movies" onClick={() => handleTabChange("watch")}>
          <WatchListLink className={selectedTab === "watch" ? 'active' : ''}>Watchlist</WatchListLink>
        </Link>
        <Link to="/users/:id/movies" onClick={() => handleTabChange("rated")}>
          <WatchListLink className={selectedTab === "rated" ? 'active' : ''}>All rated</WatchListLink>
        </Link>

        <Link to="/users/:id/movies" onClick={() => handleTabChange("users")}>
          <WatchListLink className={selectedTab === "users" ? 'active' : ''}>Other users</WatchListLink>
        </Link>
        <PopoverUserSearch />
      </SubNavbar>
    </>
  )
}