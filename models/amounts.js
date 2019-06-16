var Sequelize = require("sequelize");


module.exports = function (sequelize, DataTypes) {
    var Amount = sequelize.define("amount", {
        amount: DataTypes.DOUBLE,
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

    DrinkAmount = sequelize.define('drink_amount', {
        role: Sequelize.STRING
    });

    Amount.associate = function(model) {
        Amount.belongsToMany(model.drink, {through: DrinkAmount});
    }

    return Amount;
};