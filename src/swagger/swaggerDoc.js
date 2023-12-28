const express = require("express")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const swaggerOptions = require("./swaggerOptions") // Your Swagger options

const router = express.Router()

const swaggerSpec = swaggerJsdoc(swaggerOptions)

// Swagger endpoint to serve the documentation
router.use("/", swaggerUi.serve)
router.get("/", swaggerUi.setup(swaggerSpec))

module.exports = router // Export the router
