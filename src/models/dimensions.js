'use strict';

module.exports = (sequelize, DataTypes) => {

  var dimensions = sequelize.define('dimensions', {
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

  dimensions.associate = function(models) {
    dimensions.hasMany(models.activities);
  };
  
  return dimensions;
};