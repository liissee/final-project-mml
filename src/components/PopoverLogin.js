import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Form, Input, Label, Heading } from "./Styling";


const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export const PopoverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const url = "http://localhost:8080/sessions"

  //FETCH USER
  const handleSignin = event => {
    event.preventDefault();
    setErrorMessage("");
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        //(res.status !== 201) detta ger alltid error message även om det är rätt:
        //(!res.ok) ger undefined accessToken om det är fel men inget error message
        if (!res.ok) {
          throw new Error("Your e-mail and/or password was incorrect");
        } else {
          return res.json();
        }
      })

      .then(({ accessToken, userId }) => {
        if (accessToken && userId) {
          window.localStorage.setItem("accessToken", accessToken);
          window.localStorage.setItem("userId", userId);

          history.push(`/welcome`);
        }
      })
      .catch(err => {
        setErrorMessage(err.message);
      });
  };

  const reDirect = () => {
    history.push(`/register`);
  };


  return (
    <>
      <Button aria-describedby={id} variant="contained" color="secondary" onClick={handleClick}>
        SIGN IN
      </Button>
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
            />
          </Label>
          <Button type="submit" onClick={handleSignin}
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