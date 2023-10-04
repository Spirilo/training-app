import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

import { useField } from "../hooks"
import { addUserInfo } from "../reducers/userReducer"

const UserInfoForm = () => {
  const { ...name } = useField('name')
  const { ...age } = useField('age')
  const { ...city} = useField('city')
  const { ...bio} = useField('bio')

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
    <div>
      <form onSubmit={addInfo}>
        <div>
          Name: <input {...name} />
        </div>
        <div>
          Age: <input {...age} />
        </div>
        <div>
          City: <input {...city} />
        </div>
        <div>
          Bio: <textarea rows='4' cols='25' {...bio} ></textarea>
        </div>
        <div>
          <button type='submit'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default UserInfoForm