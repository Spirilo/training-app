const bcrypt = require('bcrypt')
const router = require('express').Router()

const { User } = require('../models')

router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

router.post('/', async (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = await User.create({ username, password: passwordHash })

  return res.json(user)
})

module.exports = router