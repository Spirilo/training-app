import { useEffect } from "react";
import axios from 'axios'

import Main from "./components/Main";

function App() {

  useEffect(() => {
    axios.get('http://localhost:3001/api/users').then(d => console.log(d.data))
  }, [])

  return (
    <div>
      <p>Fitflow</p>
      <Main />
    </div>
  );
}

export default App;
