const express = require('express')
const cors = require('cors')
const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const userInfoRouter = require('./controllers/userInfos')
const trainingRouter = require('./controllers/trainings')

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/userinfo', userInfoRouter)
app.use('/api/training', trainingRouter)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()