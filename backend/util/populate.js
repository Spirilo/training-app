const { userData, teamData } = require('./data')
const { User, Team } = require('../models')
const bcrypt = require('bcrypt')

const populateDatabase = async () => {
  try {
    for(const data of userData) {
      data.password = await bcrypt.hash(data.password, 10)

      await User.findOrCreate({ where: data })
    }
    for(const data of teamData) {
      await Team.findOrCreate({ where: data })
    }
    console.log('Users and teams populated!')
  } catch(error) {
    console.error('Error populating:', error)
  }
}

module.exports = { populateDatabase }