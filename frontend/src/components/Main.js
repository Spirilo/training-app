import { Routes, Route, Link } from 'react-router-dom'
import UserPage from './UserPage'
import TeamList from './TeamList'
import Login from './Login'
import About from './About'
import { useSelector } from 'react-redux'

const Main = () => {
  return(
    <div>
      <div>
        <Link to="/">FitFlow</Link>
        <Link to="/user">Profile</Link>
        <Link to="/teams">Teams</Link>
      </div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/teams' element={<TeamList />} />
      </Routes>
    </div>
  )
}

export default Main