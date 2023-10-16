import { useNavigate } from "react-router"

import './TeamList.css'

const Team = ({ name, count, handleClick }) => {
  return(
    <li>
      <p>{name}. Members: {count}</p>
      <button onClick={() => handleClick()}>Avaa</button>
    </li>
  )
}

const TeamList = ({ teams }) => {
  const navigate = useNavigate()

  if(teams === null) return <div>loading...</div>
  if(teams.length === 0) return <div>No teams yet...</div>

  const handleClick = (id) => {
    navigate(`/teams/${id}`)
  }

  console.log(teams)

  return(
    <div className="teams">
      <ul>
        {teams.map(t => 
          <Team 
            name={t.name}
            count={t.users.length} 
            handleClick={() => handleClick(t.id)} />
        )}
      </ul>
    </div>
  )
}

export default TeamList