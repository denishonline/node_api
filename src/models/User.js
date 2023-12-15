const { DataTypes } = require("sequelize")
const sequelize = require("../index")

const User = sequelize.define(
  "User",
  {
    // Define your User model fields here
    id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    // Other fields...
  },
  {
    timestamps: false, // Set timestamps to true by default (if not already set)
    createdAt: false, // Disable createdAt column
    updatedAt: false, // Disable updatedAt column
  }
)

module.exports = User
