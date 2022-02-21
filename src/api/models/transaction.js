const { Model } = require("sequelize");

// Extending Model and calling init(attributes, options)
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        // Class instances Method
        static associate(models) {
            Transaction.belongsTo(models.Order, {
                foreignKey: "order_id",
                sourceKey: "id",
            });
        }
    }

    Transaction.init(
        {
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            payment_type: {
                type: DataTypes.ENUM('cash', 'cheque'),
                allowNull: false
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        },
        {
            // Other model options go here
            timestamps: true,
            underscored: true,
            sequelize,
            modelName: "Transaction",
            tableName: "transactions",
        }
    );
    return Transaction;
};
