const TopUp = require("../models/TopUp")

const createTopUp = async (topUpData) => {
  return await TopUp.create(topUpData)
}

const getAllTopUps = async () => {
  return await TopUp.findAll()
}

const getTopUpById = async (id) => {
  return await TopUp.findByPk(id)
}

const updateTopUp = async (id, updatedData) => {
  const topUp = await getTopUpById(id)
  if (!topUp) return null
  return await topUp.update(updatedData)
}

const deleteTopUp = async (id) => {
  const topUp = await getTopUpById(id)
  if (!topUp) return null
  return await topUp.destroy()
}

module.exports = {
  createTopUp,
  getAllTopUps,
  getTopUpById,
  updateTopUp,
  deleteTopUp,
}
