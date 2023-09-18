const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('express').Router()

const { User } = require('../models')
const { SECRET } = require('../util/config')

router.post('/', async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({
    where: { 
      username: username
    }
  })

  const passwordOk = user === null 
    ? false
    : await bcrypt.compare(password, user.password)

  if (!(user && passwordOk)) {
    return res.status(401).json({ error: 'Invalid username or password!' })
  }

  const userForToken = {
    username: user.username,
    id: user.id
  }

  const token = jwt.sign(userForToken, SECRET)

  res.status(200).send({ token, username: user.username })
})

module.exports = router