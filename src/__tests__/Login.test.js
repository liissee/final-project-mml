import React from 'react'
import ReactDOM from 'react-dom'
import { Login } from '../pages/Login'

test('calls onSubmit with the email and password when submitted', () => {
  const handleSubmit = jest.fn()
  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

  const form = container.querySelector('form')
  const {email, password} = form.elements
  email.value = 'batman'
  password.value = 'I do not need a password'

  form.dispatchEvent(new window.Event('submit'))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    email: email.value,
    password: password.value
  })
})