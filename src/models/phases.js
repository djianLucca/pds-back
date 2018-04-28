'use strict';

module.exports = (sequelize, DataTypes) => {

  var phases = sequelize.define('phases', {
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

  phases.associate = function(models) {
    phases.hasMany(models.activities)
  };

  return phases;
};