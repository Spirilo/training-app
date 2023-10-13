const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('teams', 'messages', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ['Welcome to team!']
    })
  },
  down: async ({ context: queryInterface}) => {
    await queryInterface.remoweColumn('teams', 'messages')
  }
}