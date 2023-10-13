import { useDispatch } from 'react-redux'
import { addMessage, addTeamMember, deleteMember } from '../reducers/teamReducer'
import { useField } from '../hooks'

const TeamInfo = ({ team, user }) => {
  const msg = useField('msg')
  const dispatch = useDispatch()

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

  const addMsg = () => {
    dispatch(addMessage(team.id, msg.value))
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
      {member && 
        <div>
          <p>Messages:</p>
          {team.messages.map(m =>
            <p key={m}>{m}</p>  
          )}
          <div>
            <textarea {...msg} placeholder='Write a message' />
            <button onClick={addMsg}>Add msg</button>
          </div>
        </div>
      }
    </div>
  )
}

export default TeamInfo