import { useDispatch } from "react-redux"
import { useField } from "../hooks"
import { useNavigate } from "react-router"
import { updateUserInfo } from "../reducers/userReducer"

import './UpdateInfo.css'

const UpdateInfo = ({ user }) => {
  const bio = useField('bio')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const update = (ev) => {
    ev.preventDefault()
    const info = { bio: bio.value }
    dispatch(updateUserInfo(user.id, info))
    navigate('/user')
  }

  return(
    <div className="updateinfo-form">
      <form>
        <div>
          <p>Update bio: <textarea rows='4' cols='25' {...bio} ></textarea></p>
        </div>
        <div>
          <button onClick={update}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateInfo