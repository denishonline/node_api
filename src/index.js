const { Sequelize } = require("sequelize")
const dbConfig = require("./../config/database") // Adjust the path accordingly

const sequelize = new Sequelize(dbConfig.development) // Assuming 'development' config

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database")
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err)
  })

module.exports = sequelize
