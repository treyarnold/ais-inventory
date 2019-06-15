module.exports = function (sequelize, DataTypes) {
    var Amount = sequelize.define("Amount", {
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

    Amount.associate = function(model) {
        Amount.belongsTo(model.Ingredient);
    }

    return Amount;
};