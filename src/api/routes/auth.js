const app = require("express").Router();
const { validate } = require("express-validation");
const { Register, Login } = require("../validations/auth");
const controller = require("../controllers/auth");

/**
 * @Route -> Registering an User
 *
 * @model app.user
 * @alias register
 *
 * @api {post} /auth/register
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/register").post(validate(Register), controller.register);

/**
 * @Route -> Login for the user
 *
 * @model app.user
 * @alias login
 *
 * @api {post} /auth/login
 * @apiVersion 1.0.0 (/api/v1/)
 */
app.route("/login").post(validate(Login), controller.login);

module.exports = app;
