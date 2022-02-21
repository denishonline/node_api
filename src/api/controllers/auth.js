const {
    OK,
    RECORD_CREATED,
    NOT_REGISTER,
    BAD_REQUEST,
    INVALID_CREDENTIALS,
    NOT_FOUND,
    RECORD_FOUND,
} = require("../../helpers/constants");
const User = require("../models").User;
const { ErrorHandler } = require("../../helpers/errorHandler");
const { checkError, omitter } = require("../../helpers/utils");
const APIError = require("../../helpers/apiError");

/**
 * @api {post} /user/register
 * @apiDescription Creates a user
 * @apiGroup Auth / User
 *
 * @apiSuccess (200) {Object} data the created user
 * @apiPermission Any
 * @apiVersion 1.0.0 (/api/v1/)
 */
exports.register = async (req, res, next) => {
    try {

        // Insert Into Table Operation -> Registering the User
        await User.create(req.body).then(
            (savedObject) => {
                // Success Response
                return res
                    .status(OK)
                    .json({ data: savedObject, code: OK, message: RECORD_CREATED });
            },
            async (err) => {
                console.log(err);
                // Checking for unique constraint error
                const ConvertedError = await checkError(err, "User");
                // Throwing Error using error handler
                return ErrorHandler(ConvertedError, req, res, next);
            }
        );
    } catch (error) {
        return next(error);
    }
};

/**
 * @api {post} /user/login
 * @apiDescription User Login Handler -> To authenticate user and generate token
 * @apiGroup Auth / User
 *
 * @apiSuccess (200) {Object} User data and token
 * @apiPermission Any
 * @apiVersion 1.0.0 (/api/v1/)
 */
exports.login = async (req, res, next) => {
    try {
        // Find user in table
        User.findOne({
            where: {
                email: req.body.email,
            },
        }).then((user) => {
            // Handle user not found
            if (!user) {
                const ApiError = new APIError(NOT_REGISTER, null, NOT_FOUND);
                return ErrorHandler(ApiError, req, res, next);
            }
            // Check password is correct or not
            user.comparePassword(req.body.password, (err, isMatch) => {
                // Handle Incorrect password
                if (!isMatch) {
                    const ApiError = new APIError(INVALID_CREDENTIALS, null, BAD_REQUEST);
                    return ErrorHandler(ApiError, req, res, next);
                }
                if (isMatch && !err) {
                    // Token Generation
                    let token = user.token();
                    let savedObject = { ...user.dataValues, token: `${token}` };
                    // Removing unwanted fields
                    savedObject = omitter(user.removeExtras(), savedObject);
                    // Success Response
                    return res
                        .status(OK)
                        .json({ data: savedObject, code: OK, message: RECORD_FOUND });
                } else {
                    // General Error handler
                    const ApiError = new APIError(INVALID_CREDENTIALS, null, BAD_REQUEST);
                    return ErrorHandler(ApiError, req, res, next);
                }
            });
        });
    } catch (error) {
        return next(error);
    }
};