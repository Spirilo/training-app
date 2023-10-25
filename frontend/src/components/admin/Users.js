import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers, removeUser } from "../../reducers/usersReducer"

const Users = () => {
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  if(users === null) return <div>No users yet...</div>

  const dlt = (id) => {
    dispatch(removeUser(id))
  }

  return(
    <div>
      <ul>
        {users.map(u =>
          <li key={u.id}>
            {u.username}
            {u.username !== 'admin' && <button onClick={() => dlt(u.id)}>remove</button> }
          </li>  
        )}
      </ul>
    </div>
  )
}

export default Users