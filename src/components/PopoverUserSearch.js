import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { searchResult } from '../reducers/users.js'
import { ButtonSearchUser, Input, Label } from './Styling'

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export const PopoverUserSearch = () => {
  const [userName, setUserName] = useState("")
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSearch = (event) => {
    event.preventDefault()
    dispatch(searchResult(userName))
    handleClose()
    setUserName("")
    history.push(`/search`)
  }


  return (
    <>
      <ButtonSearchUser aria-describedby={id} variant="contained" color="secondary" onClick={handleClick}>
        Search User
      </ButtonSearchUser>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          <Label>
            Search user
          <Input
              type="search"
              value={userName}
              onChange={event => setUserName(event.target.value)} />
          </Label>
          <Button type="submit"
            onClick={handleSearch}
          >
            Search User
        </Button>
        </Typography>
      </Popover>
    </>
  )
}