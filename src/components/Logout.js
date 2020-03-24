import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { users } from '../reducers/users'
import { LogoutStaticButton, SignOutButton } from './Styling'


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