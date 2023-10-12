import { useNavigate } from "react-router"

const Team = ({ name, count, handleClick }) => {
  return(
    <li>
      {name}. Members: {count}
      <button onClick={() => handleClick()}>Avaa</button>
    </li>
  )
}

const TeamList = ({ teams }) => {
  const navigate = useNavigate()

  console.log(teams)

  if(teams === null) return <div>loading...</div>
  if(teams.length === 0) return <div>No teams yet...</div>

  const handleClick = (id) => {
    navigate(`/teams/${id}`)
  }

  return(
    <div>
      TeamList
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