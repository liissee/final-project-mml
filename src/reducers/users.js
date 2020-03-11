import { createSlice } from '@reduxjs/toolkit'

// Define initial state, what should be included?
const initialState = {
  userName: "",
  userId: "",
  accessToken: "",
  userName: ""
}

// Discuss which reducers and actions that should be included
export const users = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
      localStorage.setItem('accessToken', action.payload)
    },
    getAccessToken: (state, action) => {
      state.accessToken = action.payload
      localStorage.getItem('accessToken', action.payload)
    },
    removeAccessToken: (state, action) => {
      state.accessToken = ""
      localStorage.removeItem('accessToken', action.payload)
    },
    setUserId: (state, action) => {
      state.userId = action.payload
      localStorage.setItem("userId", action.payload)
    },
    removeUserId: (state, action) => {
      state.userId = ""
      localStorage.removeItem('userId', action.payload)
    },
    setUserName: (state, action) => {
      state.userName = action.payload
      localStorage.setItem('userName', action.payload)
    },
    removeUserName: (state, action) => {
      state.userName = ""
      localStorage.removeItem('userName', action.payload)
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
        }
      })
      .catch(err => console.log('error', err))
  }
}

export const getLocalstorage = (accessToken) => {
  return dispatch => {
    dispatch(users.actions.getAccessToken(accessToken))
  }
}




// // REDUCERS FOR USERS/LOGIN
// import { createSlice } from '@reduxjs/toolkit'
// import { ui } from './ui'

// export const users = createSlice({
//   name: 'users',
//   initialState: {
//     accessToken: localStorage.getItem('accessToken'),
//     userName: localStorage.getItem('userName')
//   },
//   reducers: {
//     setUserName: (state, action) => {
//       localStorage.setItem('userName', action.payload)
//       state.userName = action.payload
//     },
//     removeUserName: (state, action) => {
//       state.userName = localStorage.removeItem('userName', action.payload)
//     },
//     setAccessToken: (state, action) => {
//       localStorage.setItem('accessToken', action.payload)
//       state.accessToken = action.payload
//     },
//     removeAccessToken: (state, action) => {
//       localStorage.removeItem('accessToken', action.payload)
//       state.accessToken = ''
//     }
//   }
// })

// // THUNK MIDDLEWARE FOR LOGIN
// export const fetchUser = (loginValues) => {
//   return dispatch => {
//     dispatch(ui.actions.setLoading(true))
//     fetch('https://nyblad-final-project-api.herokuapp.com/login', {
//       method: 'POST',
//       body: JSON.stringify(loginValues),
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then(res => res.json())
//       .then(json => {
//         if (json.notFound !== true) {
//           dispatch(users.actions.setAccessToken(json.accessToken))
//           dispatch(users.actions.setUserName(json.name))
//           dispatch(ui.actions.setLoading(false))
//           dispatch(ui.actions.setLoginFailed(false))
//           dispatch(ui.actions.setLoginOpen(false))
//         } else {
//           dispatch(ui.actions.setLoading(false))
//           dispatch(ui.actions.setLoginFailed(true))
//         }
//       })
//       .catch(err => console.log('error', err))
//   }
// }

// Learn more or give us feedback
// import { createSlice } from '@reduxjs/toolkit'

// export const ui = createSlice({
//   name: 'ui',
//   initialState: {
//     isLoading: false,
//     isLoginOpen: false,
//     isConfirmDeleteOpen: false,
//     isConfirmEditOpen: false,
//     isRsvpConfirmOpen: false,
//     isLoginFailed: false,
//   },
//   reducers: {
//     setLoading: (state, action) => {
//       state.isLoading = action.payload
//     },
//     setLoginOpen: (state, action) => {
//       state.isLoginOpen = action.payload
//     },
//     setConfirmDeleteOpen: (state, action) => {
//       state.isConfirmDeleteOpen = action.payload
//     },
//     setConfirmEditOpen: (state, action) => {
//       state.isConfirmEditOpen = action.payload
//     },
//     setRsvpConfirmOpen: (state, action) => {
//       state.isRsvpConfirmOpen = action.payload
//     },
//     setLoginFailed: (state, action) => {
//       state.isLoginFailed = action.payload
//     }
//   }
// })