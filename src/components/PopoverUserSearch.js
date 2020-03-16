import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Input, Label, ErrorMessage } from "./Styling";
import { searchResult } from "../reducers/users.js"
import { ButtonSearchUser } from "./Styling";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export const PopoverUserSearch = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch()
  // const accessToken = useSelector((state) => state.users.accessToken)


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSearch = (event) => {
    event.preventDefault()
    dispatch(searchResult(userName));
    handleClose()
    setUserName("")
    history.push(`/search`)
  }

  // const reDirect = () => {
  //   history.push(`/register`);
  // };


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
          {/* <ErrorMessage>
            {errorMessage}
          </ErrorMessage> */}
          <Label>
            Search user
          <Input
              type="search"
              // required
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
  );
}