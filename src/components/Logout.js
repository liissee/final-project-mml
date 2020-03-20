import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { users } from "../reducers/users"
import { SignOutButton, Button } from './Styling'
import styled from 'styled-components/macro'


export const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const handleLogout = () => {
    dispatch(users.actions.removeAccessToken(""))
    dispatch(users.actions.removeUserName(""))
    dispatch(users.actions.removeUserId(""))
    history.push(`/`)
  }


  return (
    <SignOutButton onClick={handleLogout}>
      Sign out
    </SignOutButton>
  )
}

export const LogoutStatic = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const handleLogout = () => {
    dispatch(users.actions.removeAccessToken(""))
    dispatch(users.actions.removeUserName(""))
    dispatch(users.actions.removeUserId(""))
    history.push(`/`)
  }

  return (
    <LogoutStaticButton onClick={handleLogout}>
      Sign out
    </LogoutStaticButton>
  )
}

const LogoutStaticButton = styled.button`
font-family: 'Raleway',sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0;
    margin: 0;
    letter-spacing: 0.5rem;
    color: #000f3c;
    text-decoration: none;
    transition: color 0.3s linear;
`
