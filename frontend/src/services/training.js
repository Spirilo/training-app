import axios from "axios"

import token from "../utils/token"

const baseUrl = 'http://localhost:3001/api/training'

const add = async training => {
  const config = {
    headers: { Authorization: token },
  }

  await axios.post(baseUrl, training, config)
}

export default { add }