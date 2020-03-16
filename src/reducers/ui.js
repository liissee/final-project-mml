import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    tab: "movies",
    isLoginFailed: false,
    errorMessage: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setTab: (state, action) => {
      state.tab = action.payload
    },
    setLoginFailed: (state, action) => {
      state.isLoginFailed = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    }
  }
})