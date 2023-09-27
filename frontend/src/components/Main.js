import { Routes, Route, Link } from 'react-router-dom'
import UserPage from './UserPage'
import TeamList from './TeamList'
import Login from './Login'

const Main = () => {
  return(
    <div>
      <div>
        <Link to="/user">Profile</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path='/user' element={<UserPage />} />
        <Route path='/teams' element={<TeamList />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default Main