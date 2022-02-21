const Joi = require("joi");

module.exports = {
    /**
     * @model app.transaction
     * @alias Add Transaction Validation's
     *
     * @api {post} /transaction/
     * @apiVersion 1.0.0 (/api/v1/)
     */
    AddTransaction: {
        body: Joi.object().keys({
            order_id: Joi.number().required(),
            payment_type: Joi.string().required(),
            amount: Joi.number().required(),
        }),
    },
};
