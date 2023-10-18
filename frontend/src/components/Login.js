import { useNavigate } from "react-router"
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

import { loginUser } from "../reducers/userReducer"

import Notification from "./Notification"
import { useField } from "../hooks"

import './Login.css'

const Login = ({ notification }) => {
  const {reset: resetUsername, ...username} = useField('username')
  const {reset: resetPass, ...password} = useField('password')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (ev) => {
    ev.preventDefault()
    const user = {
      username: username.value,
      password: password.value
    }
    resetUsername()
    resetPass()
    dispatch(loginUser(user))
    
    navigate('/')
  }

  return(
    <div className="login-form">
      {notification !== null &&
        <div className="notification">
          <Notification />
        </div>
      }
      <h2>Fitflow</h2>
      <form onSubmit={login}>
        <div>
          <input {...username} type="text" placeholder="Username" />
        </div>
        <div>
          <input {...password} type="password" placeholder="Password" />
        </div>
        <div>
          <button type="submit">
            Login
          </button>
        </div>
      </form>
      <Link className="sign-up" to='/signup'>Not a member? Sign up here</Link>
    </div>
  )
}

export default Login