import { Routes, Route, Link } from 'react-router-dom'
import UserPage from './UserPage'
import TeamList from './TeamList'
import About from './About'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import TrainingList from './TrainingList'
import TrainingForm from './TrainingForm'
import UserInfoForm from './UserInfoForm'

const Main = ({ user }) => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(setUser(null))
  }

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
        <Route path='/teams' element={<TeamList />} />
        <Route path='/traininglist' element={<TrainingList />} />
        <Route path='/addtraining' element={<TrainingForm />} />
        <Route path='/userinfo' element={<UserInfoForm />} />
      </Routes>
    </div>
  )
}

export default Main