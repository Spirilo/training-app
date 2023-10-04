import { createSlice } from "@reduxjs/toolkit"

import loginService from '../services/login'
import userService from '../services/user'
import userInfoService from '../services/userInfo'
import trainingService from '../services/training'

import tokenFunc from '../utils/token'

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
    },
    addTraining(state, action) {
      state.trainings.push(action.payload)
    }
  }
})

export const { setUser, setUserInfo, addTraining } = userSlice.actions

export const loginUser = credentials => {
  return async dispatch => {
    try {
      const tokenUser = await loginService.login(credentials)
      tokenFunc.setToken(tokenUser.token)
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

export const createTraining = training => {
  return async dispatch => {
    await trainingService.add(training)
    dispatch(addTraining(training))
  }
}

export default userSlice.reducer