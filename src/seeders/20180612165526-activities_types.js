'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('activities_types', [
      {
        id: uuidv4(),
        initials: 'C',
        name: 'Conhecimento',
        description: 'conhecer, saber',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        initials: 'H',
        name: 'Habilidade',
        description: 'fazer, realizar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        initials: 'A',
        name: 'Atitude',
        description: 'perfil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
