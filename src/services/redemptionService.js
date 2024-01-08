const redemptionRepository = require("../repositories/redemptionRepository")

const createRedemption = async (redemptionData) => {
  return await redemptionRepository.createRedemption(redemptionData)
}

const getAllRedemptions = async () => {
  return await redemptionRepository.getAllRedemptions()
}

const getRedemptionById = async (id) => {
  return await redemptionRepository.getRedemptionById(id)
}

const updateRedemption = async (id, newData) => {
  return await redemptionRepository.updateRedemption(id, newData)
}

const deleteRedemption = async (id) => {
  return await redemptionRepository.deleteRedemption(id)
}

module.exports = {
  createRedemption,
  getAllRedemptions,
  getRedemptionById,
  updateRedemption,
  deleteRedemption,
}
