const app = require("express").Router();
const { validate } = require("express-validation");
const { AddTransaction } = require("../validations/transaction");
const { Authorize } = require("../../middleware/auth");
const { LOGGED_IN } = require("../../helpers/constants");
const controller = require("../controllers/transaction");

app.route("/").post(Authorize(LOGGED_IN), validate(AddTransaction), controller.addTransaction);

//app.route("/").get(Authorize(LOGGED_IN), controller.listTransaction);

module.exports = app;
