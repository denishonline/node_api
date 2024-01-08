const sequelize = require("../../config/database")
const User = require("./User")
const Request = require("./Request")
const Switch = require("./Switch")
const TopUp = require("./TopUp")
const Redemption = require("./Redemption")
// Import other models here

const models = {
  User,
  Request,
  Switch,
  TopUp,
  Redemption,
}

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models)
  }
})

module.exports = { sequelize, ...models }
