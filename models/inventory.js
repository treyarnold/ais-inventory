var Sequelize = require("sequelize");


module.exports = function (sequelize, DataTypes) {
  var Inventory = sequelize.define("inventory", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    quantity_bottles: DataTypes.DOUBLE,
    price_bottle: DataTypes.DOUBLE,
    inventory_value: DataTypes.DOUBLE,
    reorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    UPC: DataTypes.STRING,
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

  DrinkInventory = sequelize.define('drink_inventory', {
    role: Sequelize.STRING,
  }, {
    timestamps: false,
});



  Inventory.associate = function(model) {
    Inventory.belongsToMany(model.drink, {through: DrinkInventory});
  };

  return Inventory;
};