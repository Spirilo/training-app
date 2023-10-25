import { configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/userReducer'
import teamReducer from './reducers/teamReducer'
import notificationReducer from './reducers/notificationReducer'
import usersReducer from './reducers/usersReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    teams: teamReducer,
    notification: notificationReducer,
    users: usersReducer
  }
})

export default store