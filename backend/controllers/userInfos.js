const router = require('express').Router()

const { UserInfo, User } = require('../models')
const { tokenExtractor } = require('../util/middleware')

router.post('/', tokenExtractor, async (req, res) => {
  const user = await User.findByPk(req.decodedToken.id)
  const userInfo = await UserInfo.create({ ...req.body, userId: user.id })
  return res.json(userInfo)
})

router.put('/:id', tokenExtractor, async (req, res) => {
  const userInfo = await UserInfo.findOne({ where: { userId: req.params.id }})
  userInfo.bio = req.body.bio
  await userInfo.save()
  return res.status(200).end()
})

module.exports = router