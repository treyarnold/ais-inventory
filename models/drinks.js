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

    Drink.associate = function(model) {
        Drink.hasMany(model.Inventory);
        Drink.belongsTo(model.Order);
    }

    return Drink;
};