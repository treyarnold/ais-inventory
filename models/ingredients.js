module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        amount: DataTypes.DOUBLE,
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

    Ingredient.associate = function(model) {
        Ingredient.belongsTo(model.drink);
    }

    return Ingredient;
};