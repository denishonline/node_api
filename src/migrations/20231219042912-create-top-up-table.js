"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TopUps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client_code: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      pas_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
      },
      basket_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mode_of_remittance_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.FLOAT,
      },
      top_up_letter_received: {
        type: Sequelize.BOOLEAN,
      },
      submitted_at_displ: {
        type: Sequelize.DATE,
      },
      remarks: {
        type: Sequelize.STRING(200),
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TopUps")
  },
}
