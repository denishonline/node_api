const { Model } = require("sequelize");

// Extending Model and calling init(attributes, options)
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        // Class instances Method
        static associate(models) {

            Order.belongsTo(models.User, {
                foreignKey: "user_id",
                sourceKey: "id",
            });

            Order.hasMany(models.OrderItem, {
                foreignKey: {
                    name: 'order_id'
                }
            });
        }
    }

    Order.init(
        {
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            order_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            total: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
                allowNull: false
            },
        },
        {
            // Other model options go here
            sequelize,
            modelName: "Order",
            tableName: "orders",
        }
    );
    return Order;
};
