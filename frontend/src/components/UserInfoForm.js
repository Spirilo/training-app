import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

import { useField } from "../hooks"
import { addUserInfo } from "../reducers/userReducer"

import './UserInfoForm.css'

const UserInfoForm = () => {
  const name = useField('name')
  const age = useField('age')
  const city = useField('city')
  const bio = useField('bio')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const addInfo = (ev) => {
    ev.preventDefault()
    const userInfo = {
      name: name.value,
      age: Number(age.value),
      city: city.value,
      bio: bio.value
    }
    console.log(userInfo)
    dispatch(addUserInfo(userInfo))

    navigate('/')
  }

  return(
    <div className="userinfo-form">
      <form onSubmit={addInfo}>
        <div>
          <p>Name: <input {...name} /></p>
        </div>
        <div>
          <p>Age: <input {...age} /></p>
        </div>
        <div>
          <p>City: <input {...city} /></p>
        </div>
        <div>
          <p>Bio: <textarea rows='4' cols='25' {...bio} ></textarea></p>
        </div>
        <div>
          <button type='submit'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default UserInfoForm