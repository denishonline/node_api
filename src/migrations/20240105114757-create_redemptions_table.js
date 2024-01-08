"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Redemptions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pas_id: {
        type: Sequelize.TEXT,
      },
      client_code: {
        type: Sequelize.TEXT,
      },
      name: {
        type: Sequelize.TEXT,
      },
      basket_id: {
        type: Sequelize.INTEGER,
      },
      payout_mode: {
        type: Sequelize.ENUM("stock_transfer", "fund_transfer"),
      },
      bank_id: {
        type: Sequelize.INTEGER,
      },
      account_no: {
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.TEXT,
      },
      dp_name: {
        type: Sequelize.TEXT,
      },
      dp_id: {
        type: Sequelize.TEXT,
      },
      beneficiary_name: {
        type: Sequelize.TEXT,
      },
      amount_type: {
        type: Sequelize.ENUM("partial", "full"),
      },
      amount: {
        type: Sequelize.FLOAT,
      },
      redemption_letter_received: {
        type: Sequelize.BOOLEAN,
      },
      login_date: {
        type: Sequelize.DATE,
      },
      remarks: {
        type: Sequelize.TEXT,
      },
      approved: {
        type: Sequelize.BOOLEAN,
      },
      approved_by: {
        type: Sequelize.INTEGER,
      },
      approved_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Redemptions")
  },
}
