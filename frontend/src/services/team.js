import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/teams'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const addMessage = async (id, msg) => {
  console.log(id, msg)
  await axios.put(`${baseUrl}/${id}/messages`, msg)
}

export default { getAll, addMessage }