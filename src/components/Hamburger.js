import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { LogoutStatic } from './Logout'
import { movies } from '../reducers/movies'
import { ui } from '../reducers/ui'
import { HamburgerWrap, StyledBurger, StyledMenu } from './Styling'


export const Menu = ({ open, setOpen }) => {
  const selectedTab = useSelector((state) => state.ui.tab)
  const dispatch = useDispatch()

  const handleTabChange = (tab) => {
    dispatch(ui.actions.setTab(tab))
    dispatch(ui.actions.setPage(1))
  }


  return (
    <StyledMenu open={open}>
      <Link to="/" 
        onClick={() => { handleTabChange("movies"); dispatch(movies.actions.setSearchTerm("")); setOpen(!open) }}
      >
        <span role="img" aria-label="movies">🎬</span>
        MOVIES
      </Link>

      <Link to="/users/:id/movies" 
        onClick={() => { handleTabChange("watch"); setOpen(!open) }}
      >
        <span role="img" aria-label="watchlist">📝</span>
        Watchlist
      </Link>

      <Link to="/users/:id/movies" 
        onClick={() => { handleTabChange("rated"); setOpen(!open) }}
      >
        <span role="img" aria-label="rating">⭐️</span>
        All rated
      </Link>

      <Link to="/users/:id/movies" 
        onClick={() => { handleTabChange("users"); setOpen(!open) }}
      >
        Other users
      </Link>

      <Link to="/login" 
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="login">✅</span>
        Sign in
      </Link>

      <Link to="/register" 
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="register">🖋</span>
        Register
      </Link>

      <Link 
        onClick={() => setOpen(!open)}>
        <span role="img" aria-label="logout">❌</span>
        <LogoutStatic />
      </Link>
    </StyledMenu>
  )
}


const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();

  return (
    <HamburgerWrap>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </HamburgerWrap>
  )
}