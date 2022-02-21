const app = require("express").Router();
const { validate } = require("express-validation");
const { AddProduct } = require("../validations/product");
const model = require("../models").Product;
const BaseController = require("../controllers/base");
const { Authorize } = require("../../middleware/auth");
const { ByIdParams, GetBaseController } = require("../validations/common");
const { LOGGED_IN } = require("../../helpers/constants");

const controller = new BaseController(model, "Product");

/**
 * @Route -> Product details, update and delete by ID
 *
 * @model app.product
 * @alias Product's Read/Update/Delete
 *
 * @api {get | put | delete} /product/:id
 * @apiVersion 1.0.0 (/api/v1/)
 */
app
    .route("/:id")
    .get(Authorize(LOGGED_IN), validate(ByIdParams), controller.get)
    .put(Authorize(LOGGED_IN), validate(ByIdParams), controller.update)
    .delete(Authorize(LOGGED_IN), validate(ByIdParams), controller.delete);

/**
 * @Route -> Add Product
 *
 * @model app.product
 * @alias Add Product
 *
 * @api {post} /product/
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/").post(Authorize(LOGGED_IN), validate(AddProduct), controller.add);

/**
 * @Route -> List product
 *
 * @model app.product
 * @alias List Product
 *
 * @api {get} /product/
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/").get(Authorize(LOGGED_IN), validate(GetBaseController), controller.list);

module.exports = app;
