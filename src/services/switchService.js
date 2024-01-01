const switchRepository = require("../repositories/switchRepository")

const createSwitch = async (switchData) => {
  return await switchRepository.createSwitch(switchData)
}

const getAllSwitches = async () => {
  return await switchRepository.getAllSwitches()
}

const getSwitchById = async (id) => {
  return await switchRepository.getSwitchById(id)
}

const updateSwitch = async (id, updatedData) => {
  return await switchRepository.updateSwitch(id, updatedData)
}

const deleteSwitch = async (id) => {
  return await switchRepository.deleteSwitch(id)
}

module.exports = {
  createSwitch,
  getAllSwitches,
  getSwitchById,
  updateSwitch,
  deleteSwitch,
}
