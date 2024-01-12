const { validationResult } = require("express-validator")
const logger = require("./../../config/logger") // Import the logger instance

const handleErrors = (err, req, res, next) => {
  console.error(err.stack)
  console.log("🚀 ~ err:", err)

  logger.error({
    message: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString(),
  })

  res.status(500).json({ Error: err.message })
}

// Common validation error handling function
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  console.log("🚀 ~ errors:", errors)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  next() // Proceed to the next middleware if validation passes
}

module.exports = {
  handleErrors,
  handleValidationErrors,
}
