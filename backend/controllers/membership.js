const Membership = require('../models/membership')

const router = require('express').Router()

router.post('/', async (req, res) => {
  const memberShip = await Membership.create({ ...req.body })
  return res.json(memberShip)
})

router.delete('/', async (req, res) => {
  console.log(req.body)
  await Membership.destroy({
    where: {
      userId: req.body.userId,
      teamId: req.body.teamId
    }
  })
  return res.status(200).end()
})

module.exports = router