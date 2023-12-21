const express = require("express")
const authRoutes = require("./src/routes/authRoutes")

const app = express()

app.use(express.json())

// Use authentication routes
app.use("/auth", authRoutes)

const PORT = process.env.PORT_AUTH || 4000 // Port 4000 for authentication service
app.listen(PORT, () => {
  console.log(`Authentication service running on port ${PORT}`)
})
