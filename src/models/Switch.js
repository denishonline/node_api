// models/Switch.js

const { DataTypes } = require("sequelize")
const sequelize = require("../index") // Ensure the correct path to your sequelize instance

const Switch = sequelize.define(
  "Switch",
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
    switch_out_basket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    switch_in_basket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount_type: {
      type: DataTypes.ENUM("partial", "full"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    switch_letter_received: {
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

module.exports = Switch
