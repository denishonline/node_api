/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 *
 * --------------------------------------------------
 *
 * @module app.v1.envVariablesConfig
 * @description Getting all ENV variables
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

// Morgan configuration for production environment
const MorganProd = {
    skip: function (req, res) {
        return res.statusCode < 400;
    },
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
        flags: "a",
    }),
};

// Setting Environment variables
module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    DB: process.env.DB,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    DIALECT: process.env.DIALECT,
    DB_POOL: {
        max: 5, // maximum number of connection in pool
        min: 0, // minimum number of connection in pool
        acquire: 30000, // maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
    },
    Level: process.env.NODE_ENV === "development" ? "debug" : "error", // logging priority for development & production
    logType: process.env.NODE_ENV === "development" ? "dev" : "combined", // Morgan logger for development & production
    morganConfig: process.env.NODE_ENV === "development" ? {} : MorganProd, // Morgan Config for development & production
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRESIN: process.env.JWT_EXPIRESIN,
};
