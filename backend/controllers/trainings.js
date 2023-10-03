const router = require('express').Router()

const { User, Training } = require('../models')
const { tokenExtractor } = require('../util/middleware')

router.post('/', tokenExtractor, async (req, res) => {
  const user = await User.findByPk(req.decodedToken.id)
  const trainingInfo = await Training.create({ ...req.body, userId: user.id})
  return res.json(trainingInfo)
})

module.exports = router