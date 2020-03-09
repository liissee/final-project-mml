import { createSlice } from '@reduxjs/toolkit'

// Define initial state, what should be included?
const initialState = {
  userName: "",
  userId: "",
  loggedIn: false
}

// Discuss which reducers and actions that should be included
export const users = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload
      localStorage.setItem('accessToken', action.payload)
    },
    setLoggedInUserName: (state, action) => {
      state.userName = action.payload
    }
  }
})
