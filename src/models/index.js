const sequelize = require("../../config/database")
const User = require("./User")
const Request = require("./Request")
// Import other models here

const models = {
  User,
  Request,
  // Other models...
}

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models)
  }
})

module.exports = { sequelize, ...models }