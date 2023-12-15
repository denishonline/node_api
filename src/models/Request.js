// models/Request.js

const { DataTypes } = require("sequelize")
const sequelize = require("../index")

const Request = sequelize.define(
  "Request",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pas_id: {
      type: DataTypes.STRING(50),
    },
    dtsm_no: {
      type: DataTypes.STRING(50),
    },
    name: {
      type: DataTypes.STRING(50),
    },
    pan_no: {
      type: DataTypes.STRING(50),
    },
    basket_id: {
      type: DataTypes.INTEGER,
    },
    residential_status_id: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING(200),
    },
    mode_of_remittance_id: {
      type: DataTypes.INTEGER,
    },
    cheque_no: {
      type: DataTypes.STRING(50),
    },
    drawn_on_bank_id: {
      type: DataTypes.INTEGER,
    },
    bank_city: {
      type: DataTypes.STRING(50),
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    rm_name: {
      type: DataTypes.STRING(50),
    },
    distributor_name: {
      type: DataTypes.STRING(50),
    },
    checklist: {
      type: DataTypes.ENUM("pass_app", "bank_ac", "demat_set"),
    },
    franked: {
      type: DataTypes.BOOLEAN,
    },
    submitted_at_displ: {
      type: DataTypes.DATE,
    },
    remarks: {
      type: DataTypes.STRING(200),
    },
    transaction_branch_location_id: {
      type: DataTypes.INTEGER,
    },
    zone_id: {
      type: DataTypes.INTEGER,
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

module.exports = Request
