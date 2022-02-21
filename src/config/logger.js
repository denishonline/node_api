/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 *
 * --------------------------------------------------
 *
 * @module app.v1.loggingIntoConsole
 * @description Making logs of various things in an attractive manner according to logs level using winston
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const { createLogger, format, transports } = require("winston");
const { Level, env } = require("./envVars");

// {   error: 0,   warn: 1,   info: 2,   http: 3,  verbose: 4,   debug: 5,   silly: 6 } // logging priority
const formatParams = (info) => {
    const { timestamp, level, message, ...args } = info;
    const ts = timestamp.slice(0, 19).replace("T", " ");

    return `${ts} ${level}: ${message} ${Object.keys(args).length ? JSON.stringify(args, "", "") : ""
        }`;
};

const Format = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(formatParams)
);

const transportArray =
    env === "production"
        ? [new transports.File({ filename: "error.log", level: "error" })]
        : [new transports.Console()];

const logger = createLogger({
    Level,
    format: Format,
    transports: transportArray,
});

module.exports = logger;
