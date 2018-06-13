'use strict';

module.exports = (sequelize, DataTypes) => {

  var activities_types = sequelize.define('activities_types', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    initials: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    name: { singular: 'activity_type', plural: 'activities_types' }
  });

  activities_types.associate = function(models) {
    activities_types.hasMany(models.activities);
  };

  return activities_types;
};