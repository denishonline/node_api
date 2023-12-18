"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Switches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pas_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      client_code: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
      },
      switch_out_basket_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      switch_in_basket_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount_type: {
        type: Sequelize.ENUM("partial", "full"),
        allowNull: false,
      },
      amount: {
        type: Sequelize.FLOAT,
      },
      switch_letter_received: {
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
    await queryInterface.dropTable("Switches")
  },
}
