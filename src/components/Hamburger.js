import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { ui } from '../reducers/ui'
import { movies } from '../reducers/movies'
import { LogoutStatic } from './Logout'

const StyledMenu = styled.nav`
  background: #ffcf3c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  left: 0;
  padding: 1.5rem;
  position: absolute;
  text-align: left;
  top: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  width: 100%;
  a {
    font-family: 'Raleway',sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.3rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000f3c;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

export const Menu = ({ open, setOpen }) => {
  const selectedTab = useSelector((state) => state.ui.tab)
  const dispatch = useDispatch()

  const handleTabChange = (tab) => {
    dispatch(ui.actions.setTab(tab))
    dispatch(ui.actions.setPage(1))
  }
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => { handleTabChange("movies"); dispatch(movies.actions.setSearchTerm("")); setOpen(!open) }}>
        <span role="img" aria-label="movies">🎬</span>
      MOVIES
    </Link>

      <Link to="/users/:id/movies" onClick={() => { handleTabChange("watch"); setOpen(!open) }}>
        <span role="img" aria-label="watchlist">📝</span>
      Watchlist
    </Link>

      <Link to="/users/:id/movies" onClick={() => { handleTabChange("rated"); setOpen(!open) }}>
        <span role="img" aria-label="rating">⭐️</span>
      All rated
    </Link>

      <Link to="/users/:id/movies" onClick={() => { handleTabChange("users"); setOpen(!open) }}>
        Other users
    </Link>
      <Link to="/login" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="login">✅</span>
        Sign in
    </Link>
      <Link to="/register" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="register">🖋</span>
        Register
    </Link>
      <Link onClick={() => setOpen(!open)}>
        <span role="img" aria-label="logout">❌</span>
        <LogoutStatic />
      </Link>
    </StyledMenu>
  )
}



const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const HamburgerWrap = styled.div`
  display: inline-block;
  @media(min-width: 768px) {
    display: none;
  }
`


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

