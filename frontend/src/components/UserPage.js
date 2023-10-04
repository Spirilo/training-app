import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const UserPage = () => {
  const user = useSelector(state => state.user)

  console.log(user.userInfo)

  if (user.userInfo === null) {
    return(
      <Link to='/userinfo'>Please add your information here!</Link>
    )
  }

  return(
    <div>
      Userpage
      <p>Name: {user.userInfo.name} </p>
      <p>Age: {user.userInfo.age} </p>
      <p>City: {user.userInfo.city} </p>
      <p>Bio: {user.userInfo.bio} </p>
    </div>
  )
}

export default UserPage