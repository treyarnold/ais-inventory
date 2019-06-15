var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        total_price: DataTypes.DOUBLE,
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

    Order.associate = function(model){
        Order.hasMany(model.drink);
        Order.belongsTo(model.User);
    }

    return Order;
};