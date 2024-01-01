const Switch = require("../models/Switch")

const createSwitch = async (switchData) => {
  return await Switch.create(switchData)
}

const getAllSwitches = async () => {
  return await Switch.findAll()
}

const getSwitchById = async (id) => {
  return await Switch.findByPk(id)
}

const updateSwitch = async (id, updatedData) => {
  const switchRow = await getSwitchById(id)
  if (!switchRow) return null
  return await switchRow.update(updatedData)
}

const deleteSwitch = async (id) => {
  const switchRow = await getSwitchById(id)
  if (!switchRow) return null
  return await switchRow.destroy()
}

module.exports = {
  createSwitch,
  getAllSwitches,
  getSwitchById,
  updateSwitch,
  deleteSwitch,
}
