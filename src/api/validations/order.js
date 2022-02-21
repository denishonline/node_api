const Joi = require("joi");

module.exports = {
    /**
     * @model app.order
     * @alias Add Order Validation's
     *
     * @api {post} /order/
     * @apiVersion 1.0.0 (/api/v1/)
     */
    AddOrder: {
        body: Joi.object().keys({
            order_items: Joi.required(),
            //products: Joi.string().required()
        }),
    },
};
