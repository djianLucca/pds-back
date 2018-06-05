'use strict';

module.exports = (sequelize, DataTypes) => {

  var models = sequelize.define('models', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    name: { singular: 'model', plural: 'models' }
  });

  // models.associate = function(models) {
  //   models.belongsTo(models.phases);
  //   models.belongsTo(models.dimensions);
  //   models.belongsTo(models.models_types);
  //   models.hasMany(models.action_plans);
  // };

  return models;
};