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
   return queryInterface.bulkInsert('phases', [
    {
      id: uuidv4(),
      name: 'Skate',
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Bicicleta',
      order: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Carro',
      order: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Avião',
      order: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      name: 'Foguete',
      order: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
