import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTeams } from "../reducers/teamReducer"

const Team = ({ name, info, count }) => {
  return(
    <li>{name}, info: {info}. Members: {count}</li>
  )
}

const TeamList = () => {
  const teams = useSelector(state => state.teams)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTeams())
  }, [])

  console.log(teams)

  return(
    <div>
      TeamList
      <ul>
        {teams.map(t => 
          <Team name={t.name} info={t.info} count={t.users.length} />
        )}
      </ul>
    </div>
  )
}

export default TeamList