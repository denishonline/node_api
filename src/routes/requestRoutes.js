const express = require("express")
const router = express.Router()
const requestController = require("../controllers/requestController")
const {
  createRequestValidation,
} = require("../middlewares/validations/requestValidations")

// Create a new request
router.post("/", createRequestValidation, requestController.createRequest)

// Get all requests
router.get("/", requestController.getAllRequests)

// Get a request by ID
router.get("/:id", requestController.getRequestById)

// Update a request by ID
router.put("/:id", requestController.updateRequest)

// Delete a request by ID
router.delete("/:id", requestController.deleteRequest)

module.exports = router
