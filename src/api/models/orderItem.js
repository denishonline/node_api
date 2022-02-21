const { Model } = require("sequelize");

// Extending Model and calling init(attributes, options)
module.exports = (sequelize, DataTypes) => {
    class OrderItem extends Model {
        // Class instances Method
        static associate(models) {

            OrderItem.belongsTo(models.Order, {
                foreignKey: "order_id",
                sourceKey: "id",
            });

            OrderItem.belongsTo(models.Product, {
                foreignKey: "item_id",
                sourceKey: "id",
            });
        }
    }
    OrderItem.init(
        {
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            item_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            // Other model options go here
            sequelize,
            modelName: "OrderItem",
            tableName: "order_items",
            timestamps: false,
        }
    );
    return OrderItem;
};
