const redemptionService = require("../services/redemptionService")

const createRedemption = async (req, res, next) => {
  try {
    const newRedemption = await redemptionService.createRedemption(req.body)
    return res.status(201).json(newRedemption)
  } catch (error) {
    next(error)
  }
}

const getAllRedemptions = async (req, res, next) => {
  try {
    const redemptions = await redemptionService.getAllRedemptions()
    return res.status(200).json(redemptions)
  } catch (error) {
    next(error)
  }
}

const getRedemptionById = async (req, res, next) => {
  try {
    const { id } = req.params
    const redemption = await redemptionService.getRedemptionById(id)
    if (!redemption) {
      return res.status(404).json({ message: "Redemption not found" })
    }
    return res.status(200).json(redemption)
  } catch (error) {
    next(error)
  }
}

const updateRedemption = async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedRedemption = await redemptionService.updateRedemption(
      id,
      req.body
    )
    return res.status(200).json(updatedRedemption)
  } catch (error) {
    next(error)
  }
}

const deleteRedemption = async (req, res, next) => {
  try {
    const { id } = req.params
    await redemptionService.deleteRedemption(id)
    return res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createRedemption,
  getAllRedemptions,
  getRedemptionById,
  updateRedemption,
  deleteRedemption,
}
