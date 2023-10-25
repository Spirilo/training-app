import { useDispatch } from 'react-redux'

import { addMessage, addTeamMember, deleteMember } from '../reducers/teamReducer'

import { useField } from '../hooks'

import './TeamInfo.css'

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
    <div className='flex-container'>
      <div className='team-container'>
        <h3 className='team-name'>
          {team.name}
          {member ?
            <button onClick={leaveTeam}>Poistu</button>
          :
            <button onClick={joinTeam}>Liity</button>
          }
        </h3>
      <div className='team-info'>
        <p>Info/ {team.info}</p>
        Members:
        <ul>
          {team.users.map(t =>
          <li>{t.username}</li>
          )}
        </ul>
      </div>
    </div>
    
    <div >
      {member && 
        <div className='messages-container'>
          <h3 className='messages-name'>Chat/</h3>
          {team.messages.map(m =>
            <p key={m}>{m}</p>  
          )}
          <div>
            <textarea {...msg} placeholder='Write a message' />
            <p><button onClick={addMsg}>Add msg</button></p>
          </div>
        </div>
      }
    </div>
    </div>
  )
}

export default TeamInfo