/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 *
 * --------------------------------------------------
 *
 * @module app.v1.utilsHelper
 * @description Reusable functions which can be used throughout the App.
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const APIError = require("./apiError");
const { BAD_REQUEST, DUPLICATE_ERROR, INVALID_CREDENTIALS } = require("./constants");

exports.checkError = async (data, model) => {
    if (data.name === "SequelizeUniqueConstraintError") {
        const errorObj = { ...data.errors[0] };
        const errors = [
            {
                field: errorObj.path,
                location: model,
                message: `${errorObj.value} is already added in ${model}!`,
            },
        ];
        var arr = new APIError(DUPLICATE_ERROR, errors, BAD_REQUEST);
        return arr;
    } else if (data.name === "SequelizeForeignKeyConstraintError") {
        //const errorObj = { ...data.errors[0] };
        const errors = [
            {
                //field: errorObj.path,
                //location: model,
                message: `Foreign key constraint Failed!`,
            },
        ];
        var arr = new APIError(INVALID_CREDENTIALS, errors, BAD_REQUEST);
        return arr;
    } else {
        return data;
    }
};

exports.omitter = (keys, obj) => {
    if (!keys.length) return obj;
    const { [keys.pop()]: omitted, ...rest } = obj;
    return this.omitter(keys, rest);
};
