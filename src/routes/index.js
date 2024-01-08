const express = require("express")
const router = express.Router()

const userRoutes = require("./userRoutes")
const requestRoutes = require("./requestRoutes")
const switchRoutes = require("./switchRoutes")
const topUpRoutes = require("./topUpRoutes")
const redemptionRoutes = require("./redemptionRoutes")

// Use user routes
router.use("/users", userRoutes)
router.use("/requests", requestRoutes)
router.use("/switches", switchRoutes)
router.use("/topUps", topUpRoutes)
router.use("/redemptions", redemptionRoutes)
// Use other routes
// router.use('/auth', authenticationRoutes);
// router.use('/products', productRoutes);

module.exports = router
