import { Link } from "react-router-dom"
import { useField } from "../hooks"
import userService from '../services/user'

const SignUp = () => {
  const username = useField('username')
  const password = useField('password')
  const passwordCheck = useField('pwcheck')

  const sign = async (ev) => {
    ev.preventDefault()
    if (password.value !== passwordCheck.value) {
      console.log('ERROR')
      return
    }
    const user = {
      username: username.value,
      password: password.value
    }
    username.reset()
    password.reset()
    passwordCheck.reset()
    
    try {
      const data = await userService.createUser(user)
      console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return(
    <div>
      <form onSubmit={sign}>
        <div>
          Username: <input {...username} />
        </div>
        <div>
          Password: <input {...password} type="password" />
        </div>
        <div>
          Confirm password: <input {...passwordCheck} type="password" />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <Link to='/'>Already signed up? Login here</Link>
    </div>
  )
}

export default SignUp