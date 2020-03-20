import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from "../reducers/users.js"
import {
  Button, ErrorMessage, FieldContainer,
  Form, Heading, Input, Label
} from "../components/Styling";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch()
  const failed = useSelector(state => state.ui.isLoginFailed)

  const handleSignin = (event) => {
    event.preventDefault()
    dispatch(fetchUser({ email, password }))
    if (!failed) {
      history.push(`/`)
    }
  }

  const reDirect = () => {
    history.push(`/register`);
  };


  return (
    <FieldContainer>
      <Form>
        <Heading>Sign-in</Heading>
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
        {failed && <ErrorMessage>Incorrect user and/or password.</ErrorMessage>}

        <Button type="submit" onClick={handleSignin}>
          LOGIN
        </Button>
        <Button type="button" onClick={reDirect}>
          Not a member?
        </Button>
      </Form>
    </FieldContainer>
  );
};
