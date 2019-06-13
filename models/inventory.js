module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    quantity: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    reorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    UPC: DataTypes.INTEGER    
  });
  return Inventory;
};
