'use strict';

module.exports = (sequelize, DataTypes) => {

  var action_plans = sequelize.define('action_plans', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  }, {
    name: { singular: 'action_plan', plural: 'action_plans' }
  });

  action_plans.associate = function(models) {
    action_plans.belongsTo(models.activities);
    action_plans.belongsTo(models.smm_models);
    action_plans.hasMany(models.startup_models);
  };

  return action_plans;
};