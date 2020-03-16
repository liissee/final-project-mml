import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'

// Define initial state, what should be included?
const initialState = {
  users: [],
  userName: localStorage.userName || "",
  accessToken: localStorage.accessToken || "",
  userId: localStorage.userId || "",
}

// Discuss which reducers and actions that should be included
export const users = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
      window.localStorage.setItem('accessToken', action.payload)
    },
    removeAccessToken: (state, action) => {
      state.accessToken = ""
      window.localStorage.removeItem('accessToken', action.payload)
    },
    setUserId: (state, action) => {
      state.userId = action.payload
      window.localStorage.setItem("userId", action.payload)
    },
    removeUserId: (state, action) => {
      state.userId = ""
      window.localStorage.removeItem('userId', action.payload)
    },
    setUserName: (state, action) => {
      state.userName = action.payload
      window.localStorage.setItem('userName', action.payload)
    },
    removeUserName: (state, action) => {
      state.userName = ""
      window.localStorage.removeItem('userName', action.payload)
    },
    setUser: (state, action) => {
      state.users = action.payload
    }
  }
})


const url = "http://localhost:8080/sessions"

export const fetchUser = ({ email, password }) => {
  return dispatch => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Your e-mail and/or password was incorrect");
        } else {
          return res.json();
        }
      })
      .then(({ accessToken, userId, name }) => {
        if (accessToken && userId && name) {
          dispatch(users.actions.setAccessToken(accessToken))
          dispatch(users.actions.setUserName(name))
          dispatch(users.actions.setUserId(userId))
          dispatch(ui.actions.setLoginFailed(false))
        }
        // else {
        //   dispatch(ui.actions.setLoginFailed(true))
        // }
      })
      // .catch(err => console.log('error', err))
      .catch(err => dispatch(ui.actions.setLoginFailed(true)))
    // .catch(err => dispatch(users.actions.setErrorMessage(err.message))
    // )
  }
}

const userId = users.userId

//takes searchterm as a prop/argument and send search result to MoveList.js. 
export const searchResult = (userName) => {
  return dispatch => {
    fetch(`http://localhost:8080/users/:userId/allUsers?name=${userName}`)
      .then(res => res.json())
      .then(json => {
        dispatch(users.actions.setUser(json))
      })
  }
}