import { createSlice } from "@reduxjs/toolkit"

import loginService from '../services/login'

const initialState = null

const userSlice = createSlice({
  name: 'user,',
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload
      return state
    }
  }
})

export const { setUser } = userSlice.actions

export const loginUser = credentials => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    dispatch(setUser(user))
  }
}

export default userSlice.reducer