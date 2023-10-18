import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import Notification from "./Notification"

import userService from '../services/user'
import { setNotification } from "../reducers/notificationReducer"

import { useField } from "../hooks"

import './SignUp.css'

const SignUp = ( {notification} ) => {
  const {reset: resetUsername, ...username} = useField('username')
  const {reset: resetPassword, ...password} = useField('password')
  const {reset: resetPwCheck, ...passwordCheck} = useField('pwcheck')

  const dispatch = useDispatch()

  const sign = async (ev) => {
    ev.preventDefault()
    if (password.value !== passwordCheck.value) {
      dispatch(setNotification('Passwords dont match!', 5))
      return
    }
    const user = {
      username: username.value,
      password: password.value
    }
    resetUsername()
    resetPassword()
    resetPwCheck()
    
    try {
      await userService.createUser(user)
    } catch (error) {
      dispatch(setNotification(error.response.data.error, 5))
    }
  }

  return(
    <div className="signup-form">
      {notification !== null &&
        <div className="notification">
          <Notification />
        </div>
      }
      <h2>Fitflow</h2>
      <form onSubmit={sign}>
        <div>
          <input {...username} type="text" placeholder="Username" />
        </div>
        <div>
          <input {...password} type="password" placeholder="Password" />
        </div>
        <div>
          <input {...passwordCheck} type="password" placeholder="Confirm password" />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <Link className="login" to='/'>Already signed up? Login here</Link>
    </div>
  )
}

export default SignUp