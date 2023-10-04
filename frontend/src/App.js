import { useSelector } from "react-redux";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const user = useSelector(state => state.user)
  console.log(user)
  return (
    <div>
    {user === null  ? 
      <Login />
    :
      <Main user={user} />
    }
    </div>
  )
}

export default App;
