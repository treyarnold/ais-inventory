module.exports = function (sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
        drink_name: DataTypes.STRING,
        drink_type: DataTypes.STRING,
        num_sold: DataTypes.DOUBLE,
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

    Drink.associate = function(model) {
        Drink.hasMany(model.Ingredient);
        Drink.belongsTo(model.Order);
    }

    return Drink;
};