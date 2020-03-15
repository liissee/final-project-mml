import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { users } from "../reducers/users"
import { SignOutButton } from './Styling'


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
    <SignOutButton variant="contained" color="secondary" onClick={handleLogout}>
      Sign out
    </SignOutButton>
  )
}