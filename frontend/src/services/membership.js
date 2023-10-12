import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/memberships'

const joinTeam = async (body) => {
  await axios.post(baseUrl, body)
}

const leaveTeam = async (body) => {
  console.log(body)
  await axios.delete(baseUrl, { data: body } )
}

export default { joinTeam, leaveTeam }