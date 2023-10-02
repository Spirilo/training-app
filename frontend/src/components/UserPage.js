import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import userService from '../services/user'

const UserPage = () => {
  const user = useSelector(state => state.user)
  const [userInfo, setUserInfo] = useState('')

  console.log(userInfo)

  useEffect(() => {
    const fetchUser = async () => {
      const data = await userService.getByUsername(user.username)
      setUserInfo(data.userInfo)
    }
    fetchUser()
  }, [])

  return(
    <div>
      Userpage
      <p>Name: {userInfo.name} </p>
      <p>Age: {userInfo.age} </p>
      <p>City: {userInfo.city} </p>
      <p>Bio: {userInfo.bio} </p>
    </div>
  )
}

export default UserPage