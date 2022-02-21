/**
 * This file is part of [NODEJS BOILERPLATE]
 *
 *
 * --------------------------------------------------
 *
 * @module app.v1.genericController
 * @description Generic Controller for performing CRUD operations on each models
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const APIError = require("../../helpers/apiError");
const {
    OK,
    RECORD_CREATED,
    NO_RECORD_FOUND,
    RECORDS_FOUND,
    RECORD_NOT_EXIST,
    BAD_REQUEST,
    RECORD_UPDATED,
    RECORD_DELETED,
} = require("../../helpers/constants");
const { ErrorHandler } = require("../../helpers/errorHandler");
const { checkError } = require("../../helpers/utils");

// Base Controller for CRUD Operations
class BaseController {
    constructor(model, name) {
        this._model = model;
        this._name = name;
        this.reservedVars = ["page", "perPage", "counter", "search"];
        this.add = this.add.bind(this);
        this.list = this.list.bind(this);
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    // Remove Keys from object
    removeReservedVars(queries, dissolvers) {
        return Object.keys(queries)
            .filter((obj) => dissolvers.indexOf(obj) === -1)
            .filter((obj) => !obj.startsWith("$"))
            .reduce((obj, key) => {
                obj[key] = queries[key];
                return obj;
            }, {});
    }

    /**
     * @api {post} /${modelName}/
     * @apiDescription General Add Operation -> To simply add the data's without any manipulation
     * @apiGroup Applicable to all ${modelName}
     *
     * @apiSuccess (200) {Object} Respective Model data
     * @apiPermission Passed in the Authorize Handle Of particular Route
     * @apiVersion 1.0.0 (/api/v1/)
     */
    // Add to Table
    async add(req, res, next) {
        try {

            // return res.json({ data: req.body });

            // Insert Into Table Operation
            await this._model.create(req.body).then(
                (savedObject) => {
                    // Success Response
                    return res
                        .status(OK)
                        .json({ data: savedObject, code: OK, message: RECORD_CREATED });
                },
                async (err) => {
                    // Checking for unique constraint error
                    const ConvertedError = await checkError(err, this._name);
                    return ErrorHandler(ConvertedError, req, res, next);
                }
            );
        } catch (error) {
            return next(error);
        }
    }

    /**
     * @api {get} /${modelName}/
     * @apiDescription General List Operation -> Generic list API to get model listing with pagination, general search, include-exclude fields and particular field search options.
     * @apiGroup Applicable to all ${modelName}
     *
     * @apiSuccess (200) {Array of Objects} Respective Model data
     * @apiPermission Passed in the Authorize Handle Of particular Route
     * @apiVersion 1.0.0 (/api/v1/)
     */
    // Generic listing API
    async list(req, res, next) {
        try {
            // Remove all reserve varialbles
            let whereIsMyData = this.removeReservedVars(req.query, this.reservedVars);
            let findQuery = {};
            let page = parseInt(req.query.page) || 1;
            let limit = parseInt(req.query.perPage) || 10;

            // Model Constructor
            const modelConstructure = new this._model();

            // Removing unwanted fields
            const attributes = modelConstructure.removeExtras();
            const removeAttributes = { exclude: attributes };

            // Handling Pagination
            if (limit && page)
                findQuery = { ...findQuery, limit, offset: (page - 1) * limit };

            // Handle Common Search
            if (req.query.search) {
                modelConstructure.searchable().forEach((element) => {
                    req.query[`$${element}`] = req.query.search;
                });
            }

            // Creating Search Regex for each searchable's
            let searchVars = Object.keys(req.query)
                .filter((obj) => obj.startsWith("$"))
                .reduce((obj, key) => {
                    obj[key.replace("$", "")] = {
                        [Op.like]: `%${req.query.search}%`,
                    };
                    return obj;
                }, {});

            // Generating Queries
            if (Object.keys(searchVars).length > 0) {
                const tempArr = Object.entries(searchVars).map((e) => ({
                    [e[0]]: e[1],
                }));

                // Creating search condition based on queries
                let searchObj = {};
                if (Object.keys(whereIsMyData).length !== 0) {
                    searchObj = {
                        where: {
                            [Op.and]: [{ ...whereIsMyData }, { [Op.or]: [...tempArr] }],
                        },
                    };
                } else {
                    searchObj = {
                        where: {
                            [Op.or]: [...tempArr],
                        },
                    };
                }
                findQuery = { ...findQuery, ...searchObj };
            }

            findQuery = { ...findQuery, attributes: { ...removeAttributes } };

            // Fetching record from Table
            await this._model.findAll(findQuery).then(
                async (savedObject) => {
                    // Giving Count if user request for counter
                    if (req.query.counter) var count = await this._model.count({});

                    // Success Response
                    return res.status(OK).json({
                        data: savedObject,
                        code: OK,
                        count,
                        message: savedObject.length > 0 ? RECORDS_FOUND : NO_RECORD_FOUND,
                    });
                },
                async (err) => {
                    throw err;
                }
            );
        } catch (error) {
            return next(error);
        }
    }

    /**
     * @api {get} /${modelName}/:id
     * @apiDescription Get Record's details from the database by its ID.
     * @apiGroup Applicable to all ${modelName}
     *
     * @apiSuccess (200) {Objects} Respective Model data
     * @apiPermission Passed in the Authorize Handle Of particular Route
     * @apiVersion 1.0.0 (/api/v1/)
     */
    // API to get specific record data
    async get(req, res, next) {
        try {
            let id = req.params.id;
            // Retrieving Record from table By ID
            await this._model.findByPk(id).then(
                async (savedObject) => {
                    return res.status(OK).json({
                        data: savedObject,
                        code: OK,
                        message: savedObject ? RECORDS_FOUND : NO_RECORD_FOUND,
                    });
                },
                async (err) => {
                    throw err;
                }
            );
        } catch (error) {
            return next(error);
        }
    }

    /**
     * @api {put} /${modelName}/:id
     * @apiDescription Update Record's details in the database by its ID.
     * @apiGroup Applicable to all ${modelName}
     *
     * @apiSuccess (200) {Objects} Respective Model data
     * @apiPermission Passed in the Authorize Handle Of particular Route
     * @apiVersion 1.0.0 (/api/v1/)
     */
    // Update Paticulat Record from given table using given ID.
    async update(req, res, next) {
        try {
            let id = req.params.id;
            // Checking if Record is there or not in table
            let updateObj = await this._model.findByPk(id);
            if (!updateObj) {
                throw new APIError(RECORD_NOT_EXIST, null, BAD_REQUEST);
            }

            //return res.json({ data: req.body });

            // Updating Record in table
            await this._model.update(req.body, {
                where: { id },
            });
            // Fetching Record by ID
            await this._model.findByPk(id).then(
                async (savedObject) => {
                    return res.status(OK).json({
                        data: savedObject,
                        code: OK,
                        message: RECORD_UPDATED,
                    });
                },
                async (err) => {
                    throw err;
                }
            );
        } catch (error) {
            // Checking for unique constraint error
            if (error.name === "SequelizeUniqueConstraintError") {
                const ConvertedError = await checkError(error, this._name);
                return ErrorHandler(ConvertedError, req, res, next);
            }
            return next(error);
        }
    }

    /**
     * @api {delete} /${modelName}/:id
     * @apiDescription Delete Record's details from the database by its ID.
     * @apiGroup Applicable to all ${modelName}
     *
     * @apiSuccess (200) {Success Message OR Deleted Record Object}
     * @apiPermission Passed in the Authorize Handle Of particular Route
     * @apiVersion 1.0.0 (/api/v1/)
     */
    // Delete Paticulat Record from given table using given ID.
    async delete(req, res, next) {
        try {
            let id = req.params.id;

            // Checking if Record is there or not in table
            let deleteObj = await this._model.findByPk(id);
            if (!deleteObj) {
                throw new APIError(RECORD_NOT_EXIST, null, BAD_REQUEST);
            }
            // Deleting Record from table
            await this._model.destroy({
                where: { id },
            });
            return res.status(OK).json({
                code: OK,
                message: RECORD_DELETED,
            });
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = BaseController;
