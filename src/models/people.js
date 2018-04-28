'use strict';

module.exports = (sequelize, DataTypes) => {
  
  var people = sequelize.define('people', {
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
  
  people.associate = function(models) {
    people.hasOne(models.users, { onDelete: 'cascade' }); 
    people.hasOne(models.startups, { onDelete: 'cascade' }); 
  };

  return people;
};