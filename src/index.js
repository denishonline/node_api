const { Sequelize } = require("sequelize")
const dbConfig = require("./../config/database") // Adjust the path accordingly

const sequelize = new Sequelize(dbConfig.development) // Assuming 'development' config

// Function to establish Sequelize connection
const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connected to the database.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
    // Implement reconnect logic here
    setTimeout(connect, 5000) // Attempt to reconnect after 5 seconds
  }
}

// Call the connect function to start the connection
connect()

module.exports = sequelize
