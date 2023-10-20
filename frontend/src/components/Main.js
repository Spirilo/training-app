import { Routes, Route, Link, useNavigate, useMatch } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

import UserPage from './UserPage'
import TeamList from './TeamList'
import About from './About'
import TrainingList from './TrainingList'
import TrainingForm from './TrainingForm'
import UserInfoForm from './UserInfoForm'
import UpdateInfo from './UpdateInfo'
import TeamInfo from './TeamInfo'

import { setUser } from '../reducers/userReducer'

import './Main.css'
import AdminPage from './admin/AdminPage'

const Main = ({ user, teams, notification }) => {
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
      <div className='navbar'>
        <Link to="/">FitFlow</Link>
        <Link to="/user">Profile</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/traininglist">Workouts</Link>
        <Link to="/addtraining">Add a workout</Link>
        {user.username === 'admin' &&
          <div>
            <Link to="/admin">Admingpage</Link>
          </div>
        }
        <button onClick={logout}>Logout {user.username}</button>
      </div>
      <Routes>
        <Route path='/' element={<About user={user} />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/teams' element={<TeamList teams={teams} />} />
        <Route path='/teams/:id' element={<TeamInfo team={team} user={user} />} />
        <Route path='/traininglist' element={<TrainingList user={user} />} />
        <Route path='/addtraining' element={<TrainingForm notification={notification} />} />
        <Route path='/userinfo' element={<UserInfoForm />} />
        <Route path='/updateinfo' element={<UpdateInfo user={user} />} />
        {user.username === 'admin' &&
          <Route path='/admin' element={<AdminPage />} />
        }
      </Routes>
    </div>
  )
}

export default Main