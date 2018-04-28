'use strict';

module.exports = (sequelize, DataTypes) => {

  var action_plans = sequelize.define('action_plans', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    is_done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foreseen_date: {
      type: DataTypes.DATE
    },
    accomplished_date: {
      type: DataTypes.DATE
    },
    realization_place: {
      type: DataTypes.STRING
    },
    pct_cost: {
      type: DataTypes.DECIMAL
    },
    startup_cost: {
      type: DataTypes.DECIMAL
    },
    note: {
      type: DataTypes.TEXT
    }
  }, {
    name: { singular: 'action_plan', plural: 'action_plans' }
  });

  action_plans.associate = function(models) {
    action_plans.belongsTo(models.activities);
    action_plans.belongsTo(models.pcts);
    action_plans.belongsTo(models.startups);
  };

  return action_plans;
};