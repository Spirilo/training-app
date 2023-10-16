import { Link } from "react-router-dom"
import { useField } from "../hooks"
import userService from '../services/user'

import './SignUp.css'

const SignUp = () => {
  const {reset: resetUsername, ...username} = useField('username')
  const {reset: resetPassword, ...password} = useField('password')
  const {reset: resetPwCheck, ...passwordCheck} = useField('pwcheck')

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
    resetUsername()
    resetPassword()
    resetPwCheck()
    
    try {
      const data = await userService.createUser(user)
      console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return(
    <div className="signup-form">
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