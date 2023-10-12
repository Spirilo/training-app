import { useNavigate } from "react-router"
import { useDispatch } from 'react-redux'

import { useField } from "../hooks"
import { loginUser } from "../reducers/userReducer"
import { Link } from "react-router-dom"

const Login = () => {
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
    <div>
      Loginform
      <form onSubmit={login}>
        <div>
          <input {...username} placeholder="Username" />
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
      <Link to='/signup'>Not a member? Sign up here</Link>
    </div>
  )
}

export default Login