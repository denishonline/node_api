const express = require("express")
const router = express.Router()
const topUpController = require("../controllers/topUpController")
const {
  createTopUpValidation,
} = require("../middlewares/validations/topUpValidations")

// Routes for TopUp CRUD operations
router.get("/", topUpController.getAllTopUps)
router.get("/:id", topUpController.getTopUpById)
router.post("/", createTopUpValidation, topUpController.createTopUp)
router.put("/:id", topUpController.updateTopUp)
router.delete("/:id", topUpController.deleteTopUp)

module.exports = router
