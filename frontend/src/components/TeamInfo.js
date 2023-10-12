import { useDispatch } from 'react-redux'
import { addTeamMember, deleteMember } from '../reducers/teamReducer'

const TeamInfo = ({ team, user }) => {
  const dispatch = useDispatch()
  console.log(team)

  let member

  team.users.forEach((u) => {
    u.username === user.username ? member = user : member = null
  })

  const joinTeam = () => {
    const body = {
      teamId: team.id,
      userId: user.id
    }
    dispatch(addTeamMember(body, user))
  }

  const leaveTeam = () => {
    const body = {
      teamId: team.id,
      userId: user.id
    }
    dispatch(deleteMember(body))
  }

  return(
    <div>
      <h3>
        {team.name}
        {member ?
          <button onClick={leaveTeam}>Poistu</button>
        :
          <button onClick={joinTeam}>Liity</button>
        }
      </h3>
      <p>{team.info}</p>
      Members:
      <ul>
        {team.users.map(t =>
        <li>{t.username}</li>
        )}
      </ul>
    </div>
  )
}

export default TeamInfo