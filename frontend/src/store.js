import { configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/userReducer'
import teamReducer from './reducers/teamReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    teams: teamReducer,
    notification: notificationReducer
  }
})

export default store