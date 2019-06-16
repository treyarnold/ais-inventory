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

    Amount.associate = function(model) {
        Amount.belongsTo(model.drink);
    }

    return Amount;
};