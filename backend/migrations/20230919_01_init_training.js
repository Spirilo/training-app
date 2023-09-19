const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('trainings', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('trainings')
  }
}