import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    tab: "movies"
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setTab: (state, action) => {
      state.tab = action.payload
    }
  }

})