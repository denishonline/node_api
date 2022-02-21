const bcrypt = require("bcryptjs");
const { Model } = require("sequelize");
const { AUTH_ROLES, USER_STATUS } = require("../../helpers/constants");
const Jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRESIN } = require("../../config/envVars");

// Extending Model and calling init(attributes, options)
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        // Class instances Method
        // static associate(models) {
        //     // define association here
        //     User.belongsTo(models.CovidSurvey, {
        //         foreignKey: "userId",
        //         sourceKey: "id",
        //     });
        // }
        // General Searchables used in generic API
        searchable() {
            return ["first_name", "last_name", "email"];
        }

        // Fields to be remove from response
        removeExtras() {
            return ["password"];
        }

        // Method to return FullName
        getFullName() {
            return [this.first_name, this.last_name].join(" ");
        }

        // JWT token generation
        token() {
            const payload = {
                id: this.id,
                status: this.status,
            };
            return Jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRESIN });
        }
    }

    User.init(
        {
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: {
                type: DataTypes.STRING,
            },
            last_name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: "Email is already registered",
                },
                isEmail: true,
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: AUTH_ROLES[0],
                validate: {
                    isIn: {
                        args: [AUTH_ROLES],
                        msg: "Invalid role! Role can be either admin or user",
                    },
                },
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: USER_STATUS[0],
                validate: {
                    isIn: {
                        args: [USER_STATUS],
                        msg: "Invalid status! Status can be either active or deactive",
                    },
                },
            },
        },
        {
            // Other model options go here
            sequelize,
            modelName: "User",
            tableName: "users",

            getterMethods: {
                // Method to return FullName
                fullName() {
                    return [this.first_name, this.last_name].join(" ");
                },
            },
        }
    );

    // Hashing the password before it is saved in the database
    User.beforeSave(async (user, options) => {
        if (user.password) {
            user.password = bcrypt.hashSync(
                user.password,
                bcrypt.genSaltSync(10),
                null
            );
        }
    });

    // Bcrypt Compare Password to validate User
    User.prototype.comparePassword = function (passw, cb) {
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
        });
    };

    return User;
};
