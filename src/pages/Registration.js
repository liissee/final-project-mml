import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, FieldContainer, Form, Heading, Input, Label } from '../components/Styling'

const url = "https://final-movie-match.herokuapp.com/users"


export const Registration = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [registred, setRegistred] = useState(false)
  const [failure, setFailure] = useState(false)
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (res.status !== 201) {
          return (
            res.json().then(json => console.log(json.message)), setFailure(true)
          )
        } else {
          setRegistred(true)
          setTimeout(reDirect, 2000);
        }
      })
      .catch(err => console.log("Error:", err))
  }

  const reDirect = () => {
    history.push(`/login`)
  }

  return (
    <FieldContainer>
      {registred &&
        <Heading color={"#fff"}>Success! Continuing to login...</Heading>
      }
      {!registred && (
        <FieldContainer>
          <Form onSubmit={handleSubmit}>
            {!failure && <Heading>CREATE NEW USER</Heading>}
            {failure && (
              <Heading>
                User not created. Try using another name or email!
              </Heading>
            )}
            <Label>
              Name {name.length < 2 && name.length !== 0 && " is too short"}
              {name.length > 20 && " is too long"}
              <Input
                type="text"
                required
                value={name}
                onChange={event => setName(event.target.value)}
              ></Input>
            </Label>
            <Label>
              Email
              <Input
                lowercase
                type="text"
                required
                value={email}
                onChange={event => setEmail(event.target.value.toLowerCase())}
              ></Input>
            </Label>
            <Label>
              Password{" "}
              {password.length < 5 && password.length !== 0 && " is too short"}
              <Input
                type="password"
                required
                value={password}
                onChange={event => setPassword(event.target.value)}
              ></Input>
            </Label>
            <Button
              type="submit"
              disabled={
                name.length > 1 &&
                  name.length < 21 &&
                  password.length > 4 &&
                  email
                  ? false
                  : true
              }
              onClick={handleSubmit}
            >
              SIGN UP
            </Button>
            <Button type="button" onClick={reDirect}>
              Already a member?
            </Button>
          </Form>
        </FieldContainer>
      )}
    </FieldContainer>
  )
}