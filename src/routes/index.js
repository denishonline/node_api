const express = require("express")
const router = express.Router()

const userRoutes = require("./userRoutes") // Import user routes
// Add other route files as needed (e.g., authenticationRoutes, productRoutes, etc.)

// Use user routes
router.use("/users", userRoutes)
// Use other routes
// router.use('/auth', authenticationRoutes);
// router.use('/products', productRoutes);

module.exports = router
