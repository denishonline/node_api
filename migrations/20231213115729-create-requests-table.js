"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Requests", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pas_id: {
        type: Sequelize.STRING(50),
      },
      dtsm_no: {
        type: Sequelize.STRING(50),
      },
      name: {
        type: Sequelize.STRING(50),
      },
      pan_no: {
        type: Sequelize.STRING(50),
      },
      basket_id: {
        type: Sequelize.INTEGER,
      },
      residential_status_id: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING(200),
      },
      mode_of_remittance_id: {
        type: Sequelize.INTEGER,
      },
      cheque_no: {
        type: Sequelize.STRING(50),
      },
      drawn_on_bank_id: {
        type: Sequelize.INTEGER,
      },
      bank_city: {
        type: Sequelize.STRING(50),
      },
      amount: {
        type: Sequelize.FLOAT, // Assuming number can be a floating point number
      },
      rm_name: {
        type: Sequelize.STRING(50),
      },
      distributor_name: {
        type: Sequelize.STRING(50),
      },
      checklist: {
        type: Sequelize.ENUM("pass_app", "bank_ac", "demat_set"),
      },
      franked: {
        type: Sequelize.BOOLEAN,
      },
      submitted_at_displ: {
        type: Sequelize.DATE,
      },
      remarks: {
        type: Sequelize.STRING(200),
      },
      transaction_branch_location_id: {
        type: Sequelize.INTEGER,
      },
      zone_id: {
        type: Sequelize.INTEGER, // Assuming zone_id is an integer
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
    await queryInterface.dropTable("Requests")
  },
}
