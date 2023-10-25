import { createSlice } from "@reduxjs/toolkit"

import userService from '../services/user'

const initialState = null

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state = action.payload
      return state
    }
  }
})

export const { setUsers } = usersSlice.actions

export const getUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch(setUsers(users))
  }
}

export default usersSlice.reducer