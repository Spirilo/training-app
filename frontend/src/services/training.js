import axios from "axios"
import Cookies from "js-cookie"

const baseUrl = 'http://localhost:3001/api/training'

const add = async training => {
  const config = {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  }
  await axios.post(baseUrl, training, config)
}

export default { add }