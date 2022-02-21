const app = require("express").Router();
const { validate } = require("express-validation");
const { AddOrder } = require("../validations/order");
const model = require("../models").Order;
const BaseController = require("../controllers/base");
const { Authorize } = require("../../middleware/auth");
const { ByIdParams, GetBaseController } = require("../validations/common");
const { LOGGED_IN } = require("../../helpers/constants");
const controller = require("../controllers/order");

//const controller = new BaseController(model, "Order");

app.route("/:id").delete(Authorize(LOGGED_IN), validate(ByIdParams), controller.delete);

app.route("/").post(Authorize(LOGGED_IN), validate(AddOrder), controller.addOrder);

app.route("/").get(Authorize(LOGGED_IN), controller.listOrder);

module.exports = app;
