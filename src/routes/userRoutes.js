const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const cacheMiddleware = require("../middlewares/cacheMiddleware")
const verifyToken = require("../middlewares/authMiddleware")

// Authentication route
//router.post("/login", userController.login)

// Routes requiring authentication
//router.get("/", verifyToken, userController.getAllUsers)
// Other authenticated routes

// Routes for users
router.get("/", userController.getAllUsers)
// router.get("/:id", userController.getUserById)
// router.post("/", userController.createUser)
// router.put("/:id", userController.updateUser)
// router.delete("/:id", userController.deleteUser)

module.exports = router
