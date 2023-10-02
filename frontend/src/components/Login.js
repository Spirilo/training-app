import { useNavigate } from "react-router"
import { useField } from "../hooks"
import loginService from '../services/login'

const Login = () => {
  const { ...username } = useField('username')
  const { ...password } = useField('password')

  const navigate = useNavigate()

  const login = async (ev) => {
    ev.preventDefault()
    const user = {
      username: username.value,
      password: password.value
    }
    const data = await loginService.login(user)
    console.log(data)
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