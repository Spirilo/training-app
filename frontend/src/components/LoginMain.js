import { Routes, Route } from "react-router-dom"

import Login from "./Login"
import SignUp from "./SignUp"

const LoginMain = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default LoginMain