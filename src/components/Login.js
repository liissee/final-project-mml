import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { movies } from 'reducers/movies'
// Import what we need to use

// Create a function that POSTs user-info to our API 
// Create a form for login
export const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const dispatch = useDispatch()

  const handleRegister = event => {
    event.preventDefault()
    fetch("http://localhost8080/users", {
      method: "Post", 
      body: JSON.stringify({name, email, password}),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        res.json().then(json => setMessage(json.message))
      })
      .then(() => {
        setName("")
        setEmail("")
        setPassword("")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="form-container">
      <form>
        <div className="form-title">Register</div>

        <div className="form-text">Username</div>
        <input
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
          placeholder="Username"
        />

        <div className="form-text">Email</div>
        <input
          type="text"
          onChange={event => setEmail(event.target.value)}
          value={email}
          placeholder="Email"
        />

        <div className="form-text">Password</div>
        <input
          type="text"
          onChange={event => setPassword(event.target.value)}
          value={password}
          placeholder="Password"
        />
        
        <br></br>

        <button
          className="btn-submit"
          type="submit"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
        {message}
    </div>
  )
}