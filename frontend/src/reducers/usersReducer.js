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
    },
    dltUser(state, action) {
      return state.filter(u => u.id !== action.payload)
    }
  }
})

export const { setUsers, dltUser } = usersSlice.actions

export const getUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch(setUsers(users))
  }
}

export const removeUser = (id) => {
  return async dispatch => {
    await userService.deleteUser(id)
    dispatch(dltUser(id))
  }
}

export default usersSlice.reducer