import { Link } from "react-router-dom"
import { useField } from "../hooks"
import userService from '../services/user'

import './SignUp.css'
import { useDispatch, useSelector } from "react-redux"
import Notification from "./Notification"
import { setNotification } from "../reducers/notificationReducer"

const SignUp = () => {
  const {reset: resetUsername, ...username} = useField('username')
  const {reset: resetPassword, ...password} = useField('password')
  const {reset: resetPwCheck, ...passwordCheck} = useField('pwcheck')
  const notification = useSelector(state => state.notification)

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
      const data = await userService.createUser(user)
      console.log(data)
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