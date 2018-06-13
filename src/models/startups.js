'use strict';

module.exports = (sequelize, DataTypes) => {

  var startups = sequelize.define('startups', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  startups.associate = function(models) {
    startups.belongsTo(models.pcts); 
    startups.belongsTo(models.people); 
    startups.belongsTo(models.areas); 
    startups.hasOne(models.startup_models); 
  };

  return startups;
};