module.exports = {
  PORT: process.env.PORT || 3000,
  development: {
    username: "sa",
    password: "Admin@123",
    database: "pms",
    host: "CIPL-LPT-1461", // or your SQL Server's IP address
    dialect: "mssql",
    dialectOptions: {
      options: {
        trustedConnection: true, // Use Windows Authentication
      },
    },
  },
  // other environments: production, test, etc.
}

// module.exports = {
//   PORT: process.env.PORT || 3000,
//   // Other configurations
// }
