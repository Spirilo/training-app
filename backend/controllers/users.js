const bcrypt = require('bcrypt')
const router = require('express').Router()

const { User, UserInfo, Training } = require('../models')

router.get('/', async (req, res) => {
  const users = await User.findAll({
    include: [{
      model: UserInfo,
      attributes: { exclude: ['id', 'userId']}
    },
    {
      model: Training,
      attributes: { exclude: ['userId']}
    }]
  })
  res.json(users)
})

router.get('/:username', async (req, res) => {
  const user = await User.findOne({ 
    where: {
      username: req.params.username
    },
    include: {
      model: UserInfo,
      attributes: { exclude: ['id', 'userId']}
    }
  })
  return res.json(user)
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