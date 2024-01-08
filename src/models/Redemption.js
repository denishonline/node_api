// models/Redemption.js

const { DataTypes } = require("sequelize")
const sequelize = require("../index") // Ensure the correct path to your sequelize instance

const Redemption = sequelize.define("Redemption", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pas_id: {
    type: DataTypes.TEXT,
  },
  client_code: {
    type: DataTypes.TEXT,
  },
  name: {
    type: DataTypes.TEXT,
  },
  basket_id: {
    type: DataTypes.INTEGER,
  },
  payout_mode: {
    type: DataTypes.ENUM("stock_transfer", "fund_transfer"),
  },
  bank_id: {
    type: DataTypes.INTEGER,
  },
  account_no: {
    type: DataTypes.NUMBER,
  },
  code: {
    type: DataTypes.TEXT,
  },
  dp_name: {
    type: DataTypes.TEXT,
  },
  dp_id: {
    type: DataTypes.TEXT,
  },
  beneficiary_name: {
    type: DataTypes.TEXT,
  },
  amount_type: {
    type: DataTypes.ENUM("partial", "full"),
  },
  amount: {
    type: DataTypes.NUMBER,
  },
  redemption_letter_received: {
    type: DataTypes.BOOLEAN,
  },
  login_date: {
    type: DataTypes.DATE,
  },
  remarks: {
    type: DataTypes.TEXT,
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
})

module.exports = Redemption
