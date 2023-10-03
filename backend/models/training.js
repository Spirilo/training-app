const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Training extends Model {}

Training.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' }
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'training'
})

module.exports = Training