// models/TopUp.js

const { DataTypes } = require("sequelize")
const sequelize = require("../index") // Ensure the correct path to your sequelize instance

const TopUp = sequelize.define(
  "TopUp",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pas_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    client_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    basket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mode_of_remittance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    top_up_letter_received: {
      type: DataTypes.BOOLEAN,
    },
    submitted_at_displ: {
      type: DataTypes.DATE,
    },
    remarks: {
      type: DataTypes.STRING(200),
    },
    approved: {
      type: DataTypes.BOOLEAN,
    },
    approved_by: {
      type: DataTypes.INTEGER,
    },
    approved_date: {
      type: DataTypes.DATE,
    },
  },
  {
    // Other options like timestamps can be added here
  }
)

module.exports = TopUp
