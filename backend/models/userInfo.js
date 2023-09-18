const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class UserInfo extends Model {}

UserInfo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  city: {
    type: DataTypes.STRING
  },
  bio: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'userInfo'
})

module.exports = UserInfo