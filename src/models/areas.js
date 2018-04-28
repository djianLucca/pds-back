'use strict';

module.exports = (sequelize, DataTypes) => {

  var areas = sequelize.define('areas', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  areas.associate = function(models) {
    areas.hasMany(models.startups);
  };

  return areas;
};