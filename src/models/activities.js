'use strict';

module.exports = (sequelize, DataTypes) => {

  var activities = sequelize.define('activities', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    name: { singular: 'activity', plural: 'activities' }
  });

  activities.associate = function(models) {
    activities.belongsTo(models.phases);
    activities.belongsTo(models.dimensions);
    activities.belongsTo(models.activities_types);
    activities.hasMany(models.action_plans);
  };

  return activities;
};