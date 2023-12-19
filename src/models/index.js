const sequelize = require("../../config/database")
const User = require("./User")
const Request = require("./Request")
const Switch = require("./Switch")
const TopUp = require("./TopUp")
// Import other models here

const models = {
  User,
  Request,
  Switch,
  TopUp,
  // Other models...
}

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models)
  }
})

module.exports = { sequelize, ...models }
