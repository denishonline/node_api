const redemptionService = require("../services/redemptionService")

const createRedemption = async (req, res) => {
  try {
    const newRedemption = await redemptionService.createRedemption(req.body)
    return res.status(201).json(newRedemption)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRedemptions = async (req, res) => {
  try {
    const redemptions = await redemptionService.getAllRedemptions()
    return res.status(200).json(redemptions)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getRedemptionById = async (req, res) => {
  try {
    const { id } = req.params
    const redemption = await redemptionService.getRedemptionById(id)
    if (!redemption) {
      return res.status(404).json({ message: "Redemption not found" })
    }
    return res.status(200).json(redemption)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateRedemption = async (req, res) => {
  try {
    const { id } = req.params
    const updatedRedemption = await redemptionService.updateRedemption(
      id,
      req.body
    )
    return res.status(200).json(updatedRedemption)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteRedemption = async (req, res) => {
  try {
    const { id } = req.params
    await redemptionService.deleteRedemption(id)
    return res.status(204).send()
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createRedemption,
  getAllRedemptions,
  getRedemptionById,
  updateRedemption,
  deleteRedemption,
}
