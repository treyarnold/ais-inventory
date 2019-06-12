module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Inventory;
};
