'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'orders',
      'status',
      {
        type: Sequelize.ENUM('pending', 'completed', 'cancelled'),
        after: 'total',
        defaultValue: 'pending'
      });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('orders', 'status');
  }
};
