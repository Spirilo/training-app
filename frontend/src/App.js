import { useSelector } from "react-redux";
import Main from "./components/Main";
import LoginMain from "./components/LoginMain";

function App() {
  const user = useSelector(state => state.user)

  return (
    <div>
    {user === null  ? 
      <LoginMain />
    :
      <Main user={user} />
    }
    </div>
  )
}

export default App;
