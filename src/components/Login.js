import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Input, Label, Heading, Button, FieldContainer } from "./Styling";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //useHistory this to route to "Welcomepage" when login succeeded.
  const history = useHistory();

  const url = "http://localhost:8080/sessions"

  const handleSignin = event => {
    event.preventDefault();
    setErrorMessage("");
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
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
        <div>{errorMessage}</div>
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

