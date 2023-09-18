const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('user_infos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
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
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('user_infos')
  }
}