const express = require('express')
require('express-async-errors')
const cors = require('cors')
const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')
const { errorHandler } = require('./util/middleware')

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const userInfoRouter = require('./controllers/userInfos')
const trainingRouter = require('./controllers/trainings')
const teamsRouter = require('./controllers/teams')
const memberShipRouter = require('./controllers/membership')

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/userinfo', userInfoRouter)
app.use('/api/training', trainingRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/memberships', memberShipRouter)

app.use(errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()