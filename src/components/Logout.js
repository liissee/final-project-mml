import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

// Import what we need to use

export const Logout = () => {

  const handleLogout = () => {
    window.localStorage.removeItem("accessToken")
    window.localStorage.removeItem('userId')
  }

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Sign out
        <Link className="link-text" to={`/`}>
      </Link>
    </Button>
  )
}