import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

const UserPage = () => {
  const user = useSelector(state => state.user)

  const navigate = useNavigate()

  if (user.userInfo === null) {
    return(
      <Link to='/userinfo'>Please add your information here!</Link>
    )
  }

  const moveToUpdate = () => {
    navigate('/updateinfo')
  }

  return(
    <div>
      Userpage
      <p>Name: {user.userInfo.name} </p>
      <p>Age: {user.userInfo.age} </p>
      <p>City: {user.userInfo.city} </p>
      <p>Bio: {user.userInfo.bio} <button onClick={moveToUpdate}>Update bio</button> </p>
    </div>
  )
}

export default UserPage