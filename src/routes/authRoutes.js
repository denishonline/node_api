const express = require("express")
const authController = require("../controllers/authController")
const authMiddleware = require("../middlewares/authMiddleware")
const router = express.Router()

// Define authentication routes relative to `/`
router.post("/login", authController.login)
router.get(
  "/protected",
  authMiddleware.authenticateToken,
  authController.protected
)

module.exports = router
