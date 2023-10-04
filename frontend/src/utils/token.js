let token

const setToken = userToken => {
  token = `Bearer ${userToken}`
}

export default { setToken, token }