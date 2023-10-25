import { useDispatch, useSelector } from "react-redux"
import { createTeam, deleteTeam } from "../../reducers/teamReducer"
import { useState } from "react"
import { useField } from "../../hooks"

const Teams = () => {
  const {reset: resetName, ...name} = useField('name')
  const {reset: resetInfo, ...info} = useField('info')

  const [showForm, setShowForm] = useState(false)
  const teams = useSelector(state => state.teams)

  const dispatch = useDispatch()

  const add = async (ev) => {
    ev.preventDefault()
    const team = {
      name: name.value,
      info: info.value
    }
    try {
      await dispatch(createTeam(team))
    } catch (err) {
      console.log(err)
      window.alert(err.response.data.error)
    }
    resetName()
    resetInfo()
  }

  const dlt = (id) => {
    dispatch(deleteTeam(id))
  }

  return(
    <div>
      <button onClick={() => setShowForm(!showForm)}>Add team</button>
      {showForm && 
        <form onSubmit={add}>
          <div>
            <input {...name} placeholder="Team name here" />
          </div>
          <div>
            <input {...info} placeholder="Team info here" />
          </div>
          <button type="submit">Add</button>
        </form>
      }
      <ul>
        {teams.map(t =>
          <li key={t.id}>{t.name} <button onClick={() => dlt(t.id)}>delete team</button></li>  
        )}
      </ul>
    </div>
  )
}

export default Teams