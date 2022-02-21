/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 *
 * --------------------------------------------------
 *
 * @module app.v1.apiErrorGenerator
 * @description Generate API error's for various failed cases with proper error messages and error stacks.

 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const { INTERNAL_SERVER_ERROR } = require("./constants");

// API Error Response Structure
class APIError extends Error {
    constructor(message, errors = [], statusCode = INTERNAL_SERVER_ERROR) {
        super(message);
        this.message = message;
        this.errors = errors;
        this.status = statusCode;
    }
}

module.exports = APIError;
