const topUpRepository = require("../repositories/topUpRepository")

const createTopUp = async (topUpData) => {
  return await topUpRepository.createTopUp(topUpData)
}

const getAllTopUps = async () => {
  return await topUpRepository.getAllTopUps()
}

const getTopUpById = async (id) => {
  return await topUpRepository.getTopUpById(id)
}

const updateTopUp = async (id, updatedData) => {
  return await topUpRepository.updateTopUp(id, updatedData)
}

const deleteTopUp = async (id) => {
  return await topUpRepository.deleteTopUp(id)
}

module.exports = {
  createTopUp,
  getAllTopUps,
  getTopUpById,
  updateTopUp,
  deleteTopUp,
}
