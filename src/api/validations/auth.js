const Joi = require("joi");
const { AUTH_ROLES, USER_STATUS } = require("../../helpers/constants");

module.exports = {
    /**
     * @model app.user
     * @alias Register User Validation's
     *
     * @api {post} /auth/register
     * @apiVersion 1.0.0 (/api/v1/)
     */
    Register: {
        body: Joi.object().keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            role: Joi.string().valid(...AUTH_ROLES.values()),
            status: Joi.string().valid(...USER_STATUS.values()),
        }),
    },

    /**
     * @model app.user
     * @alias Login User Validation's
     *
     * @api {post} /auth/login
     * @apiVersion 1.0.0 (/api/v1/)
     */
    Login: {
        body: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        }),
    },
};
