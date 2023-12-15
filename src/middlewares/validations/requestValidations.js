const { body } = require("express-validator")
const { handleValidationErrors } = require("./../errorHandler") // Import the validation handler

exports.createRequestValidation = [
  body("pas_id")
    .notEmpty()
    .withMessage("pas_id cannot be empty")
    .isString()
    .isLength({ max: 50 })
    .withMessage("pas_id must be a string with a maximum length of 50"),
  body("dtsm_no")
    .isString()
    .isLength({ max: 50 })
    .withMessage("dtsm_no must be a string with a maximum length of 50"),
  // Add more validations for other fields as needed...

  // Handle validation errors using the common handler
  handleValidationErrors,
]
