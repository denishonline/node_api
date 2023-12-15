const { validationResult } = require("express-validator")

const handleErrors = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ Error: err.message })
}

// Common validation error handling function
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  next() // Proceed to the next middleware if validation passes
}

module.exports = {
  handleErrors,
  handleValidationErrors,
}
