const {
    OK,
    RECORD_CREATED,
} = require("../../helpers/constants");
const APIError = require("../../helpers/apiError");
const { sequelize } = require("../models");
const Order = require("../models").Order;
const Transaction = require("../models").Transaction;
const { ErrorHandler } = require("../../helpers/errorHandler");
const { checkError } = require("../../helpers/utils");

exports.addTransaction = async (req, res, next) => {

    const transaction = await sequelize.transaction({ autocommit: false });

    try {

        await Transaction.create(req.body);

        await Order.update({ status: "completed" }, {
            where: { id: req.body.order_id },
        });

        await transaction.commit();

        return res.status(OK).json({
            code: OK,
            message: RECORD_CREATED,
        });

    } catch (err) {

        // return res.status(500).json({
        //     success: false,
        //     data: err.stack,
        // });

        await transaction.rollback();

        const ConvertedError = await checkError(err, "Transaction");

        return ErrorHandler(ConvertedError, req, res, next);
    }
};
