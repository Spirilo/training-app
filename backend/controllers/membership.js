const Membership = require('../models/membership')

const router = require('express').Router()

router.post('/', async (req, res) => {
  const memberShip = await Membership.create({ ...req.body })
  return res.json(memberShip)
})

module.exports = router