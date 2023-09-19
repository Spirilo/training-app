const User = require('./user')
const UserInfo = require('./userInfo')
const Team = require('./team')
const Membership = require('./membership')
const Training = require('./training')

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

User.hasMany(Training)
Training.belongsTo(User)

User.belongsToMany(Team, { through: Membership })
Team.belongsToMany(User, { through: Membership })

module.exports = {
  User,
  UserInfo,
  Team,
  Training
}