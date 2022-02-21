const {
    OK,
    RECORD_CREATED,
    RECORDS_FOUND,
    RECORD_DELETED,
    RECORD_UPDATED,
    BAD_REQUEST,
    RECORD_NOT_EXIST
} = require("../../helpers/constants");
const APIError = require("../../helpers/apiError");
const { sequelize } = require("../models");
const Order = require("../models").Order;
const Product = require("../models").Product;
const OrderItem = require("../models").OrderItem;
const { ErrorHandler } = require("../../helpers/errorHandler");
const { checkError } = require("../../helpers/utils");

exports.addOrder = async (req, res, next) => {

    const transaction = await sequelize.transaction({ autocommit: false });

    try {
        const orderItems = JSON.parse(req.body.order_items);
        let orderTotal = 0;

        (orderItems || []).forEach((item) => {
            orderTotal = (orderTotal + (item.price * item.quantity));
        });

        const tmpBody = req.body;
        tmpBody["user_id"] = req.user.id;
        tmpBody["order_number"] = Math.floor(Math.random() * 1000000000);
        tmpBody["OrderItems"] = orderItems;
        tmpBody["total"] = orderTotal;
        tmpBody["status"] = "pending";

        delete tmpBody["order_items"];

        await Order.create(tmpBody, {
            include: [OrderItem],
            transaction
        }).then((savedObject) => {
            return res
                .status(OK)
                .json({ data: savedObject, code: OK, message: RECORD_CREATED });
        });

        await transaction.commit();

    } catch (err) {

        //return res.json({ data: err });

        await transaction.rollback();

        const ConvertedError = await checkError(err, "Order");

        return ErrorHandler(ConvertedError, req, res, next);
    }
};

exports.listOrder = async (req, res, next) => {
    try {

        const findQuery = {
            include: [{
                model: OrderItem, include: [Product]
            }],
            order: [
                ['id', 'DESC'],
            ],
        }

        await Order.findAll(findQuery).then(
            async (savedObject) => {
                // Giving Count if user request for counter
                if (req.query.counter) var count = await Order.count({});

                // Success Response
                return res.status(OK).json({
                    data: savedObject,
                    code: OK,
                    count,
                    message: savedObject.length > 0 ? RECORDS_FOUND : NO_RECORD_FOUND,
                });
            },
            async (err) => {
                throw err;
            }
        );

    } catch (error) {
        return next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        let id = req.params.id;

        // Checking if Record is there or not in table
        let deleteObj = await Order.findByPk(id);
        if (!deleteObj) {
            throw new APIError(RECORD_NOT_EXIST, null, BAD_REQUEST);
        }
        // Deleting Record from table
        // await Order.destroy({
        //     where: { id },
        // });

        await Order.update({ status: "cancelled" }, {
            where: { id },
        });

        return res.status(OK).json({
            code: OK,
            message: RECORD_UPDATED,
        });
    } catch (error) {
        return next(error);
    }
};