const express = require("express")
const app = express()
const config = require("./config/config")
const routes = require("./src/routes")
const swaggerDoc = require("./src/swagger/swaggerDoc")
const { handleErrors } = require("./src/middlewares/errorHandler")

// Middleware
app.use(express.json())

// Routes
app.use("/api", routes)
app.use("/api-docs", swaggerDoc)

// Error handling middleware
app.use(handleErrors)

const PORT = config.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
