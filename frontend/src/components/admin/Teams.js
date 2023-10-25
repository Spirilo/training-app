import { useDispatch, useSelector } from "react-redux"
import { deleteTeam } from "../../reducers/teamReducer"

const Teams = () => {
  const teams = useSelector(state => state.teams)

  const dispatch = useDispatch()

  const dlt = (id) => {
    dispatch(deleteTeam(id))
  }

  return(
    <div>
      <ul>
        {teams.map(t =>
          <li key={t.id}>{t.name} <button onClick={() => dlt(t.id)}>delete team</button></li>  
        )}
      </ul>
    </div>
  )
}

export default Teams