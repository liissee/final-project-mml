import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from "../reducers/users.js"
import { Button, ErrorMessage, FieldContainer, 
  Form,  Heading, Input, Label } from "./Styling";
import { users } from "../reducers/users.js"
// import { ui } from '../reducers/ui.js'


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch()
  const failed = useSelector(state => state.ui.isLoginFailed)

  // const [errorMessage, setErrorMessage] = useState("");
  // const errorMessage = useSelector((state) => state.users.errorMessage)
  // const url = "http://localhost:8080/sessions"

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



  // const handleSignin = event => {
  //   event.preventDefault();
  //   setErrorMessage("");
  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({ email, password }),
  //     headers: { "Content-Type": "application/json" }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error("Your e-mail and/or password was incorrect");
  //       } else {
  //         return res.json();
  //       }
  //     })
  //     .then(({ accessToken, userId }) => {
  //       if (accessToken && userId) {
  //         window.localStorage.setItem("accessToken", accessToken);
  //         window.localStorage.setItem("userId", userId);

  //         history.push(`/`);
  //       }
  //     })
  //     .catch(err => {
  //       setErrorMessage(err.message);
  //     });
  // };