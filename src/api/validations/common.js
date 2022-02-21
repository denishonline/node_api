const Joi = require("joi");

module.exports = {
    /**
     * @model app.${modelName}
     * @alias Base Controller listing Validation's
     *
     * @api {get} /${modelName}/
     * @apiVersion 1.0.0 (/api/v1/)
     */
    GetBaseController: {
        query: Joi.object()
            .keys({
                page: Joi.number(),
                perPage: Joi.number(),
                counter: Joi.boolean(),
                search: Joi.any(),
            })
            .unknown(true),
    },

    /**
     * @model app.${modelName}
     * @alias Base {Get | Update | Delete} By ID Validation's
     *
     * @api {get | put | delete} /${modelName}/:id
     * @apiVersion 1.0.0 (/api/v1/)
     */
    ByIdParams: {
        params: Joi.object().keys({
            id: Joi.number().required(),
        }),
    },
};
