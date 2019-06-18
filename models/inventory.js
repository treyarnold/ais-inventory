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

  DrinkInventory = sequelize.define('drink_inventory', {}, {
    timestamps: false,
});

// DrinkInventory.associate = function(model){
// DrinkInventory.belongsTo(model.drink);
// DrinkInventory.belongsTo(model.inventory)
// };

// const seed = ()=> {
//   return sequelize.sync()
//       .then(()=> {
//           return Promise.all([
//               drink.create({
//                   drink_name: 'Old Fashioned',
//                   price: 4,
//                   pic_url:'https://cdn.liquor.com/wp-content/uploads/2017/08/08074649/6-Rules-for-Drinking-Bourbone-bourbon-old-fashioned-720x720-slideshow.jpg'
//               }),
//               inventory.create ({type: 'Vodka'}),
//               inventory.create({type:'Whiskey'})
//           ])
//       })
// }
// seed();



  Inventory.associate = function(model) {
    Inventory.belongsToMany(model.drink, {through: DrinkInventory});
  };

  return Inventory;
};