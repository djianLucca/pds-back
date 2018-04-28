'use strict';

module.exports = (sequelize, DataTypes) => {

  var pcts = sequelize.define('pcts', {
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

  pcts.associate = function(models) {
    pcts.belongsTo(models.users);
    pcts.hasMany(models.startups);
    pcts.hasMany(models.action_plans);
  };

  return pcts;
};