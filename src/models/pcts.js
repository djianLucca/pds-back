'use strict';

module.exports = (sequelize, DataTypes) => {

  var pcts = sequelize.define('pcts', {
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

  pcts.associate = function(models) {
    pcts.belongsTo(models.users);
    pcts.hasMany(models.startups);
    pcts.hasMany(models.smm_models);
  };

  return pcts;
};