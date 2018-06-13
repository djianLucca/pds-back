'use strict';

module.exports = (sequelize, DataTypes) => {

  var users = sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});

  users.associate = function(models) {
    users.belongsTo(models.people);
    users.hasOne(models.pcts, { onDelete: 'cascade' }); 
  };

  return users;
};