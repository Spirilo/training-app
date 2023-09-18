const router = require('express').Router()

const { UserInfo, User } = require('../models')
const { tokenExtractor } = require('../util/middleware')

router.post('/', tokenExtractor, async (req, res) => {
  const user = await User.findByPk(req.decodedToken.id)
  const userInfo = await UserInfo.create({ ...req.body, userId: user.id })
  return res.json(userInfo)
})

module.exports = router