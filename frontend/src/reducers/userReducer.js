import { createSlice } from "@reduxjs/toolkit"

import loginService from '../services/login'
import userService from '../services/user'
import userInfoService from '../services/userInfo'

const initialState = null

const userSlice = createSlice({
  name: 'user,',
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload
      return state
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
      return state
    }
  }
})

export const { setUser, setUserInfo } = userSlice.actions

export const loginUser = credentials => {
  return async dispatch => {
    try {
      const tokenUser = await loginService.login(credentials)
      userInfoService.setToken(tokenUser.token)
      const user = await userService.getByUsername(tokenUser.username)
      dispatch(setUser(user))
    } catch {
      console.log('ERROR')
    }
  }
}

export const addUserInfo = userInfo => {
  return async dispatch => {
    await userInfoService.addInfo(userInfo)
    dispatch(setUserInfo(userInfo))
  }
}

export default userSlice.reducer