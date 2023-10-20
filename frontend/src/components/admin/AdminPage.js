import { useState } from "react"
import Teams from "./Teams"
import Users from "./Users"

const AdminPage = () => {
  const [showUserButton, setShowUserButton] = useState(true)
  const [showTeamButton, setShowTeamButton] = useState(true)
  const [showComp, setShowComp] = useState(null)

  const alterTeams = () => {
    setShowComp(0)
    setShowTeamButton(false)
    setShowUserButton(true)
  }

  const alterUsers = () => {
    setShowComp(1)
    setShowUserButton(false)
    setShowTeamButton(true)
  }
 
  return(
    <div>
      {showTeamButton && <button onClick={alterTeams}>Alter teams</button>}
      {showUserButton && <button onClick={alterUsers}>Alter users</button>}
      {showComp === 0 && <Teams />}
      {showComp === 1 && <Users />}
    </div>
  )
}

export default AdminPage