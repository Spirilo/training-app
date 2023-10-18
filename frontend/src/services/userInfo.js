import axios from "axios"
import Cookies from "js-cookie"

const baseUrl = 'http://localhost:3001/api/userinfo'

const addInfo = async info => {
  const config = {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  }
  await axios.post(baseUrl, info, config)
}

const updateInfo = async (id, info) => {
  const config = {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  }
  await axios.put(`${baseUrl}/${id}`, info, config)
}

export default { addInfo, updateInfo }