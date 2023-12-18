const express = require("express")
const router = express.Router()
const switchController = require("../controllers/switchController")
const {
  createSwitchValidation,
} = require("../middlewares/validations/switchValidations")

// Routes for Switch CRUD operations
router.get("/", switchController.getAllSwitches)
router.get("/:id", switchController.getSwitchById)
router.post("/", createSwitchValidation, switchController.createSwitch)
router.put("/:id", switchController.updateSwitch)
router.delete("/:id", switchController.deleteSwitch)

module.exports = router
