import { useSelector } from "react-redux";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const user = useSelector(state => state.user)

  return (
    <div>
    {user === null  ? 
      <Login />
    :
      <Main />
    }
    </div>
  )
}

export default App;
