/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 *
 * --------------------------------------------------
 *
 * @module app.v1.routesExports
 * @description Export for all routes defined in the routes folder except current file
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const express = require("express");
const fs = require("fs");
const app = express.Router();

// Exporting all routes generally
module.exports = fs.readdirSync(__dirname + "/").forEach(function (file) {
    if (file !== "index.js" && file.substr(-3) == ".js") {
        const routeName = file.replace(".js", "");
        app.use("/" + routeName, require("./" + routeName));
    }
});

module.exports = app;
