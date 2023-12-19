const express = require("express")
const router = express.Router()

const userRoutes = require("./userRoutes") // Import user routes
const requestRoutes = require("./requestRoutes") // Import user routes
const switchRoutes = require("./switchRoutes") // Import user routes
const topUpRoutes = require("./topUpRoutes") // Import user routes

// Use user routes
router.use("/users", userRoutes)
router.use("/requests", requestRoutes)
router.use("/switches", switchRoutes)
router.use("/topUps", topUpRoutes)
// Use other routes
// router.use('/auth', authenticationRoutes);
// router.use('/products', productRoutes);

module.exports = router
