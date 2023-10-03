const jwt = require('jsonwebtoken')

const { SECRET } = require('./config')

const errorHandler = (error, request, response, next) => {
  console.error(error.errors[0])

  const errorKey = error.errors[0].validatorKey
  const path = error.errors[0].path

  if (errorKey === 'not_unique') {
    return response.status(400).send({ error: 'Username already in use, choose another!' })
  }
  if (errorKey === 'is_null') {
    if (path === 'duration') {
      return response.status(400).send({ error: 'Training duration missing!' })
    }
    if (path === 'type') {
      return response.status(400).send({ error: 'Training type missing!' })
    }
    return response.status(400).send({ error: 'Username missing!' })
  }

  next(error)
}

const tokenExtractor = async (req, res, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    try {
      console.log(authorization.substring(7))
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
    } catch (error){
      console.log(error)
      return res.status(401).json({ error: 'token invalid' })
    }
  } else {
    return res.status(401).json({ error: 'token missing' })
  }
  next()
}

module.exports = {
  tokenExtractor,
  errorHandler
}