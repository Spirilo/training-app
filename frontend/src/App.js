import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main";
import LoginMain from "./components/LoginMain";
import { useEffect } from "react";
import { getTeams } from "./reducers/teamReducer";
import Cookies from "js-cookie";


function App() {
  const user = useSelector(state => state.user)
  const teams = useSelector(state => state.teams)

  const dispatch = useDispatch()

  useEffect(() => {
    if (user === null) Cookies.remove('token')
    dispatch(getTeams())
  }, [user])

  console.log(teams)

  return (
    <div>
      {user === null  ? 
        <LoginMain />
      :
        <Main user={user} teams={teams} />
      }
    </div>
  )
}

export default App;
