'use strict';

module.exports = (sequelize, DataTypes) => {

  var smm_models = sequelize.define('smm_models', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    name: { singular: 'smm_model', plural: 'smm_models' }
  });

  smm_models.associate = function(models) {
    smm_models.belongsTo(models.pcts);
    smm_models.hasMany(models.action_plans);
  };

  return smm_models;
};