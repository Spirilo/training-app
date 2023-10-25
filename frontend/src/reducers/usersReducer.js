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
    addUser(state, action) {
      state.push(action.payload)
    },
    dltUser(state, action) {
      return state.filter(u => u.id !== action.payload)
    }
  }
})

export const { setUsers, addUser, dltUser } = usersSlice.actions

export const getUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch(setUsers(users))
  }
}

export const createUser = (user) => {
  return async dispatch => {
    const added = await userService.createUser(user)
    dispatch(addUser(added))
  }
}

export const removeUser = (id) => {
  return async dispatch => {
    await userService.deleteUser(id)
    dispatch(dltUser(id))
  }
}

export default usersSlice.reducer