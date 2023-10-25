import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/teams'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const addTeam = async (team) => {
  const res = await axios.post(baseUrl, team)
  return res.data
}

const removeTeam = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

const addMessage = async (id, msg) => {
  console.log(id, msg)
  await axios.put(`${baseUrl}/${id}/messages`, msg)
}

export default { getAll, addTeam, addMessage, removeTeam }