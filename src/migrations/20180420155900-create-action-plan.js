'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('action_plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      is_done: {
        type: Sequelize.BOOLEAN
      },
      foreseen_date: {
        type: Sequelize.DATE
      },
      accomplished_date: {
        type: Sequelize.DATE
      },
      realization_place: {
        type: Sequelize.STRING
      },
      pct_cost: {
        type: Sequelize.DECIMAL
      },
      startup_cost: {
        type: Sequelize.DECIMAL
      },
      note: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('action_plans');
  }
};