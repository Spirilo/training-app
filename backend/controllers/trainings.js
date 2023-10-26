const router = require('express').Router()

const { User, Training } = require('../models')
const { tokenExtractor } = require('../util/middleware')

router.post('/', tokenExtractor, async (req, res) => {
  const user = await User.findByPk(req.decodedToken.id)
  const { type, duration } = req.body
  if(!type) {
    return res.status(400).send({ error: 'Workout must have type!' })
  }
  if(typeof duration !== 'number') {
    return res.status(400).send({ error: 'Duration must be number!' })
  }
  if(duration < 1) {
    return res.status(400).send({ error: 'Workout must have positive duration!' })
  }
  const trainingInfo = await Training.create({ ...req.body, userId: user.id})
  return res.json(trainingInfo)
})

module.exports = router