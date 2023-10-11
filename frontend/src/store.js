import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import teamReducer from './reducers/teamReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    teams: teamReducer,
  }
})

export default store