const User = require('./user')
const UserInfo = require('./userInfo')

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

module.exports = {
  User,
  UserInfo
}