import { useDispatch } from "react-redux"
import { useField } from "../hooks"
import { useNavigate } from "react-router"
import { updateUserInfo } from "../reducers/userReducer"

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
    <div>
      Update
      <form>
        <div>
          <textarea rows='4' cols='25' {...bio} ></textarea>
        </div>
        <div>
          <button onClick={update}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateInfo