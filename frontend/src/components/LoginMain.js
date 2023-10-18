import { Routes, Route } from "react-router-dom"

import Login from "./Login"
import SignUp from "./SignUp"

const LoginMain = ({ notification }) => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Login notification={notification} />} />
        <Route path="/signup" element={<SignUp notification={notification} />} />
      </Routes>
    </div>
  )
}

export default LoginMain