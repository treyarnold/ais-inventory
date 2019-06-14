'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inventories', [{
        type: 'Vodka',
        name: 'Grey Goose',
        quantity_bottles: 10,
        price_bottle: 33.99,
        reorder: false,
        upc: '080480280017',
      },
      {
        type: 'Whiskey',
        name: 'Jack Daniels Blk',
        quantity_bottles: 15,
        price_bottle: 18.99,
        reorder: false,
        upc: '082184090442',
      },
      {
        type: 'Beer',
        name: 'Bud Light',
        quantity_bottles: 124,
        price_bottle: 4.50,
        reorder: false,
        upc: '18200004699',
      },
      {
        type: 'Beer',
        name: 'Little Wolf',
        quantity_bottles: 240,
        price_bottle: 5,
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