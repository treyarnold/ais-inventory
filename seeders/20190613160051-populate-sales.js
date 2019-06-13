'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sales', [{
        drink_name: 'Screwdriver',
        drink_type: true,
        price: 4.50,
        ingredients_1: 'Vodka',
        ingredients_2: 'Orange Juice',
        num_sold: 2,
        amount_1: 2,
      },
      {
        drink_name: 'Old Fashioned',
        drink_type: true,
        price: 5.00,
        ingredients_1: 'Bourbon',
        ingredients_2: 'Angostura bitters',
        ingredients_3: 'Sugar',
        ingredients_4: 'Water',
        num_sold: 5,
        amount_1: 1.52
      },
      {
        drink_name: 'Negroni',
        drink_type: true,
        price: 5.00,
        ingredients_1: 'Gin',
        ingredients_2: 'Campari',
        ingredients_3: 'Sweet Vermouth',
        num_sold: 3,
        amount_1: 1,
        amount_2: 1,
        amount_3: 1
      },
      {
        drink_name: 'Bud Light',
        drink_type: false,
        price: 4.50,
        num_sold: 10,
        amount_1: 12
      },
      {
        drink_name: 'Cran-Ber-Rita',
        drink_type: false,
        price: 5,
        num_sold: 2,
        amount_1: 12
      },
      {
        drink_name: 'Little Wolf',
        drink_type: false,
        price: 5,
        num_sold: 4,
        amount_1: 12
      },
      {
        drink_name: 'Dark Knight',
        drink_type: false,
        price: 5,
        num_sold: 2,
        amount_1: 12
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