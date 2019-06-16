var Sequelize = require("sequelize");


module.exports = function (sequelize, DataTypes) {
    var Drink = sequelize.define("drink", {
        drink_name: DataTypes.STRING,
        drink_type: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        num_sold: DataTypes.DOUBLE,
        pic_url: DataTypes.STRING,
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

    DrinkOrders = sequelize.define('drink_orders', {
        role: Sequelize.STRING
    });



    Drink.associate = function(model) {
        Drink.hasMany(model.inventory);
        Drink.hasOne(model.amount);
        Drink.belongsToMany(model.order, {through: DrinkOrders});
    }

    return Drink;
};