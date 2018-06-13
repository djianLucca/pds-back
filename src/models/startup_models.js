'use strict';

module.exports = (sequelize, DataTypes) => {

  var startup_models = sequelize.define('startup_models', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    is_done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_required: {
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
    name: { singular: 'action_plan', plural: 'startup_models' }
  });

  startup_models.associate = function(models) {
    startup_models.belongsTo(models.startup_models);
    startup_models.belongsTo(models.startups);
  };

  return startup_models;
};