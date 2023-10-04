import axios from "axios"

const baseUrl = 'http://localhost:3001/api/userinfo'

let token

const setToken = userToken => {
  token = `Bearer ${userToken}`
}


const addInfo = async info => {
  const config = {
    headers: { Authorization: token },
  }

  await axios.post(baseUrl, info, config)
}

export default { addInfo, setToken }