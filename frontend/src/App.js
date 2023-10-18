import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";

import Main from "./components/Main";
import LoginMain from "./components/LoginMain";

import { getTeams } from "./reducers/teamReducer";


function App() {
  const user = useSelector(state => state.user)
  const teams = useSelector(state => state.teams)

  const dispatch = useDispatch()

  useEffect(() => {
    if (user === null) Cookies.remove('token')
    dispatch(getTeams())
  }, [user])

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
