const { body } = require("express-validator")
const { handleValidationErrors } = require("../errorHandler") // Import the validation handler

exports.createSwitchValidation = [
  body("pas_id")
    .notEmpty()
    .withMessage("pas_id cannot be empty")
    .isString()
    .isLength({ max: 50 })
    .withMessage("pas_id must be a string with a maximum length of 50"),

  // Handle validation errors using the common handler
  handleValidationErrors,
]
