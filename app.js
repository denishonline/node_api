const express = require("express")
const app = express()
const config = require("./config/config")
const routes = require("./src/routes")
const errorHandler = require("./src/middlewares/errorHandler")

// Middleware
app.use(express.json())

// Routes
app.use("/api", routes)

// Error handling middleware
app.use(errorHandler)

const PORT = config.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
