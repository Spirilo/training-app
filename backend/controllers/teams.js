const { Team, User } = require('../models')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const teams = await Team.findAll({
    include: {
      model: User,
      attributes: ['username'],
      through: {
        attributes: []
      }
    }
  })
  res.json(teams)
})

router.post('/', async (req, res) => {
  const team = await Team.create({ ...req.body })
  return res.json(team)
})

router.put('/:id/messages', async (req, res) => {
  const team = await Team.findOne({ where: { id: req.params.id }})
  const newArray = Object.assign([], team.messages)
  newArray.push(req.body.message)
  await team.update({
    messages: newArray
  })
  return res.json(team)
})

router.delete('/:id', async (req, res) => {
  await Team.destroy({ where: { id: req.params.id}})
  return res.status(200).end()
})

module.exports = router