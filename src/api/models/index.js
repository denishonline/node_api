/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 *
 * --------------------------------------------------
 *
 * @module app.v1.databaseConfigurations
 * @description Basic table configuration - MySql & Sequelize and Registering all Routes with the models
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const fs = require("fs");
const path = require("path");
const logger = require("../../config/logger");
const basename = path.basename(__filename);
const { Sequelize } = require("sequelize");
const {
    DB,
    USER,
    PASSWORD,
    HOST,
    DIALECT,
    DB_POOL,
} = require("../../config/envVars");

// Initialize Sequelize
// Connecting to a database
const db = {};
let sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    operatorsAliases: 0,
    pool: DB_POOL, // Optional - Used for Sequelize connection pool configuration
    define: {
        // freezeTableName: true, // Enforcing the table name to be equal to the model name
    },
    // logging: false,
    logging: (msg) => logger.log("info", msg),
});

// Checking Connection with Database
sequelize
    .authenticate()
    .then(() => {
        logger.info("Connection has been established successfully.");
    })
    .catch((err) => {
        logger.error("Unable to connect to the database:", err);
    });

// Registering Models name in sequelize
fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );
        db[model.name] = model;
    });

// Binding All Association
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// exporting modules
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// an asynchronous function
db.sequelize
    // Synchronization in production can be destructive So it should be done with Migrations
    .sync({
        alter: false, // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc),
        // and then performs the necessary changes in the table to make it match the model.
        // force: true, // This creates the table, dropping it first if it already existed
    })
    .then(() => {
        logger.info("DB Droped, Resync and created");
    });

module.exports = db;
