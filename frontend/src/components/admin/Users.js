import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../reducers/usersReducer"

const Users = () => {
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  if(users === null) return <div>No users yet...</div>

  return(
    <div>
      <ul>
        {users.map(u =>
          <li key={u.id}>{u.username}</li>  
        )}
      </ul>
    </div>
  )
}

export default Users