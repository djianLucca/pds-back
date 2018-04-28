'use strict';

module.exports = (sequelize, DataTypes) => {

  var startups = sequelize.define('startups', {
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

  startups.associate = function(models) {
    startups.belongsTo(models.pcts); 
    startups.belongsTo(models.people); 
    startups.belongsTo(models.areas); 
    startups.hasOne(models.action_plans); 
  };

  return startups;
};