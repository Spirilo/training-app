import { createSlice } from "@reduxjs/toolkit"
import Cookies from 'js-cookie'

import loginService from '../services/login'
import userService from '../services/user'
import userInfoService from '../services/userInfo'
import trainingService from '../services/training'

import { setNotification } from "./notificationReducer"

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
    },
    updateBio(state, action) {
      state.userInfo.bio = action.payload
      return state
    }
  }
})

export const { setUser, setUserInfo, addTraining, updateBio } = userSlice.actions

export const loginUser = credentials => {
  return async dispatch => {
    try {
      const tokenUser = await loginService.login(credentials)
      Cookies.set('token', tokenUser.token)
      const user = await userService.getByUsername(tokenUser.username)
      dispatch(setUser(user))
    } catch(err) {
      console.log(err.response.data)
      dispatch(setNotification(err.response.data.error, 5))
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

export const updateUserInfo = (id, info) => {
  return async dispatch => {
    await userInfoService.updateInfo(id, info)
    dispatch(updateBio(info.bio))
  }
}

export default userSlice.reducer