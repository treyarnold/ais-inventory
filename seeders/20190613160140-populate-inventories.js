'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inventories', [{
        type: 'Vodka',
        name: 'Grey Goose',
        quantity: 338.14,
        price: 33.99,
        reorder: false,
        upc: '080480280017',
      },
      {
        type: 'Whiskey',
        name: 'Jack Daniels Blk',
        quantity: 3381.4,
        price: 18.99,
        reorder: false,
        upc: '082184090442',
      },
      {
        type: 'Beer',
        name: 'Bud Light',
        quantity: 1200,
        price: 4.50,
        reorder: false,
        upc: '18200004699',
      },
      {
        type: 'Beer',
        name: 'Little Wolf',
        quantity: 240,
        price: 5,
        reorder: true,
        upc: '0000000123',

      }
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};