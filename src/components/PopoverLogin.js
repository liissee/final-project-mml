import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Input, Label, SignInButton, ErrorMessage } from "./Styling";
import { fetchUser } from "../reducers/users.js"
import styled from 'styled-components/macro'

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export const PopoverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch()
  // const accessToken = useSelector((state) => state.users.accessToken)
  const failed = useSelector(state => state.ui.isLoginFailed)


  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    if (failed) { //Hur få login-popuppen att stanna om login=failed? 
      setAnchorEl(null);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // const url = "http://localhost:8080/sessions"


  const handleSignin = (event) => {
    event.preventDefault()
    dispatch(fetchUser({ email, password }))

    handleClose()
    history.push(`/`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('the key is enter')
      dispatch(fetchUser({ email, password }))
      handleClose()
      history.push(`/`)
    }
  }


  const reDirect = () => {
    history.push(`/register`);
  };

  return (
    <>
      <SignInButton aria-describedby={id} onClick={handleClick}>
        SIGN IN
      </SignInButton>
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
            Email
          <Input
              type="email"
              required
              value={email}
              onChange={event => setEmail(event.target.value.toLowerCase())}
            />
          </Label>
          <Label>
            Password
          <Input
              type="password"
              required
              value={password}
              onChange={event => setPassword(event.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Label>
          {failed && <ErrorMessage>Incorrect user and/or password.</ErrorMessage>}
          <Button type="submit"
            onClick={handleSignin}
          >
            LOGIN
        </Button>
          <Button type="button" onClick={reDirect}>
            Not a member?
        </Button>
        </Typography>
      </Popover>
    </>
  );
}

