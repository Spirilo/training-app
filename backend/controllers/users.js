const router = require('express').Router()


router.get('/', async (req, res) => {
  res.json({ message : 'Toimii' })
})

module.exports = router