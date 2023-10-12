const { Team, User } = require('../models')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const teams = await Team.findAll({
    include: {
      model: User,
      attributes: ['username'],
      through: {
        attributes: ['id']
      }
    }
  })
  res.json(teams)
})

router.post('/', async (req, res) => {
  const team = await Team.create({ ...req.body })
  return res.json(team)
})

module.exports = router