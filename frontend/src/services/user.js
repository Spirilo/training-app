import axios from "axios"

const baseUrl = 'http://localhost:3001/api/users'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const getByUsername = async username => {
  const res = await axios.get(`${baseUrl}/${username}`)
  return res.data
}

const createUser = async user => {
  const res = await axios.post(baseUrl, user)
  return res.data
}

export default { getAll, getByUsername, createUser }