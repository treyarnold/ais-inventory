var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Sale = sequelize.define("Sale", {
      drink_name: DataTypes.STRING,
      drink_type: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: false
      },
      price: DataTypes.DOUBLE,
      ingredients_1: DataTypes.STRING,
      ingredients_2: DataTypes.STRING,
      ingredients_3: DataTypes.STRING,
      ingredients_4: DataTypes.STRING,
      amount_1: DataTypes.DOUBLE,
      amount_2: DataTypes.DOUBLE,
      amount_3: DataTypes.DOUBLE,
      amount_4: DataTypes.DOUBLE,
      num_sold: DataTypes.INTEGER,
      datetime: DataTypes.DATE,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
    return Sale;
  };
  