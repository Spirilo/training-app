import axios from "axios"

import token from "../utils/token"

const baseUrl = 'http://localhost:3001/api/userinfo'

const addInfo = async info => {
  const config = {
    headers: { Authorization: token },
  }

  await axios.post(baseUrl, info, config)
}

export default { addInfo }