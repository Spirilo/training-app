import axios from "axios"

import token from "../utils/token"

const baseUrl = 'http://localhost:3001/api/userinfo'

const addInfo = async info => {
  const config = {
    headers: { Authorization: token },
  }
  console.log(config)

  await axios.post(baseUrl, info, config)
}

const updateInfo = async (id, info) => {
  const config = {
    headers: { Authorization: token },
  }
  await axios.put(`${baseUrl}/${id}`, info, config)
}

export default { addInfo, updateInfo }