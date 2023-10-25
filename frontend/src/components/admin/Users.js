import { cloneElement, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useField } from "../../hooks"
import { createUser, getUsers, removeUser } from "../../reducers/usersReducer"

const Users = () => {
  const {reset: resetUsername, ...username} = useField('username')
  const {reset: resetPassword, ...password} = useField('password')

  const [showForm, setShowForm] = useState(false)
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  if(users === null) return <div>No users yet...</div>

  const add = async (ev) => {
    ev.preventDefault()
    const user = {
      username: username.value,
      password: password.value
    }
    try {
      await dispatch(createUser(user))
    } catch (err) {
      window.alert(err.response.data.error)
    }
    resetUsername()
    resetPassword()
  }

  const dlt = (id) => {
    dispatch(removeUser(id))
  }

  return(
    <div>
      <button onClick={() => setShowForm(!showForm)}>Add user</button>
      {showForm && 
        <form onSubmit={add}>
          <div>
            <input {...username} placeholder="Username here" />
          </div>
          <div>
            <input {...password} placeholder="Password here" />
          </div>
          <button type="submit">Add</button>
        </form>
      }
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