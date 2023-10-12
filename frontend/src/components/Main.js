import { Routes, Route, Link, useNavigate, useMatch } from 'react-router-dom'
import Cookies from 'js-cookie'

import UserPage from './UserPage'
import TeamList from './TeamList'
import About from './About'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import TrainingList from './TrainingList'
import TrainingForm from './TrainingForm'
import UserInfoForm from './UserInfoForm'
import UpdateInfo from './UpdateInfo'
import TeamInfo from './TeamInfo'

const Main = ({ user, teams }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    Cookies.remove('token')
    dispatch(setUser(null))
    navigate('/')
  }

  const match = useMatch('/teams/:id')
  const team = match
    ? teams.find(t => t.id === Number(match.params.id))
    : null

  return(
    <div>
      <div>
        <Link to="/">FitFlow</Link>
        <Link to="/user">Profile</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/traininglist">Workouts</Link>
        <Link to="/addtraining">Add a workout</Link>
        Welcome back {user.username}
        <button onClick={logout}>Logout</button>
      </div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/teams' element={<TeamList teams={teams} />} />
        <Route path='/teams/:id' element={<TeamInfo team={team} />} />
        <Route path='/traininglist' element={<TrainingList user={user} />} />
        <Route path='/addtraining' element={<TrainingForm />} />
        <Route path='/userinfo' element={<UserInfoForm />} />
        <Route path='/updateinfo' element={<UpdateInfo user={user} />} />
      </Routes>
    </div>
  )
}

export default Main