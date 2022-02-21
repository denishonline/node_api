const { DB, USER, PASSWORD, HOST, DIALECT } = require("./envVars");

module.exports = {
  development: {
    username: USER,
    password: PASSWORD,
    database: DB,
    host: HOST,
    dialect: DIALECT,
  },
};
