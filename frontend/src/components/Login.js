import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'

import { useField } from "../hooks"
import { loginUser } from "../reducers/userReducer"

const Login = () => {
  const { ...username } = useField('username')
  const { ...password } = useField('password')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (ev) => {
    ev.preventDefault()
    const user = {
      username: username.value,
      password: password.value
    }
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
    </div>
  )
}

export default Login