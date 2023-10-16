import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

import './UserPage.css'

const UserPage = () => {
  const user = useSelector(state => state.user)

  const navigate = useNavigate()

  if (user.userInfo === null) {
    return(
      <Link className='add-infromation' to='/userinfo'>Please add your information here!</Link>
    )
  }

  const moveToUpdate = () => {
    navigate('/updateinfo')
  }

  return(
    <div className='profile-container'>
      <p className='profile-name'>{user.userInfo.name} </p>
      <div className='profile-details'>
        <p>Age/ {user.userInfo.age} </p>
        <p>City/ {user.userInfo.city} </p>
      </div>
      <p className='profile-bio'>Bio/ {user.userInfo.bio}</p>
      <button onClick={moveToUpdate}>Update bio</button> 
    </div>
  )
}

export default UserPage