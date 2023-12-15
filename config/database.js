require("dotenv").config() // If using environment variables

console.log()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST, // or your SQL Server's IP address
    dialect: "mssql",
    dialectOptions: {
      options: {
        trustedConnection: true, // Use Windows Authentication
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  // Other environments like test, production, etc. can also be defined similarly
}
