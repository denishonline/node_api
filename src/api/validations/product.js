const Joi = require("joi");

module.exports = {
    /**
     * @model app.product
     * @alias Add Product Validation's
     *
     * @api {post} /product/
     * @apiVersion 1.0.0 (/api/v1/)
     */
    AddProduct: {
        body: Joi.object().keys({
            name: Joi.string().required(),
            sku: Joi.string().required(),
            price: Joi.string().required(),
        }),
    },
};
