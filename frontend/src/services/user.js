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

const deleteUser = async id => {
  await axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, getByUsername, createUser, deleteUser }