import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Input, Label, Heading, Button, FieldContainer } from "./Styling";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from "../reducers/users.js"
// import { ui } from '../reducers/ui.js'
import styled from 'styled-components/macro'


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch()
  // const errorMessage = useSelector((state) => state.users.errorMessage)
  const failed = useSelector(state => state.ui.isLoginFailed)

  // const url = "http://localhost:8080/sessions"

  const handleSignin = (event) => {
    event.preventDefault()
    dispatch(fetchUser({ email, password }))
    // if (accessToken) {
    //   history.push(`/`)
  } //USESELECTOR


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
        {/* <div>{errorMessage}</div> */}
        {failed && <ErrorText>Incorrect user and/or password.</ErrorText>}

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


const ErrorText = styled.p`
  font-size: 16px;
  color: #c65353;
  margin: 5px;
`