const Redemption = require("../models/Redemption")

const createRedemption = async (redemptionData) => {
  return await Redemption.create(redemptionData)
}

const getAllRedemptions = async () => {
  return await Redemption.findAll()

  console.log("🚀 ~ try:```1111``")
}

const getRedemptionById = async (id) => {
  return await Redemption.findByPk(id)
}

const updateRedemption = async (id, newData) => {
  const redemption = await Redemption.findByPk(id)
  if (!redemption) null
  return await redemption.update(newData)
}

const deleteRedemption = async (id) => {
  const redemption = await Redemption.findByPk(id)
  if (!redemption) null
  await redemption.destroy()
}

module.exports = {
  createRedemption,
  getAllRedemptions,
  getRedemptionById,
  updateRedemption,
  deleteRedemption,
}
