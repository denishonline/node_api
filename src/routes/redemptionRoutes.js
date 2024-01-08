const express = require("express")
const router = express.Router()
const redemptionController = require("../controllers/redemptionController")

router.post("/", redemptionController.createRedemption)
router.get("/", redemptionController.getAllRedemptions)
router.get("/:id", redemptionController.getRedemptionById)
router.put("/:id", redemptionController.updateRedemption)
router.delete("/:id", redemptionController.deleteRedemption)

module.exports = router
