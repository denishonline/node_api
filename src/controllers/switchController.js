const switchService = require("../services/switchService")

const createSwitch = async (req, res, next) => {
  try {
    const switchRow = await switchService.createSwitch(req.body)
    return res.status(201).json(switchRow)
  } catch (error) {
    next(error)
  }
}

const getAllSwitches = async (req, res, next) => {
  try {
    const switches = await switchService.getAllSwitches()
    return res.status(200).json(switches)
  } catch (error) {
    next(error)
  }
}

const getSwitchById = async (req, res, next) => {
  const id = req.params.id
  try {
    const switchRow = await switchService.getSwitchById(id)
    if (!switchRow) {
      return res.status(404).json({ message: "Switch not found" })
    }
    return res.status(200).json(switchRow)
  } catch (error) {
    next(error)
  }
}

const updateSwitch = async (req, res, next) => {
  const id = req.params.id
  const updatedData = req.body
  try {
    const updatedSwitch = await switchService.updateSwitch(id, updatedData)
    if (!updatedSwitch) {
      return res.status(404).json({ message: "Switch not found" })
    }
    return res.status(200).json(updatedSwitch)
  } catch (error) {
    next(error)
  }
}

const deleteSwitch = async (req, res, next) => {
  const id = req.params.id
  try {
    const deletedSwitch = await switchService.deleteSwitch(id)
    if (!deletedSwitch) {
      return res.status(404).json({ message: "Switch not found" })
    }
    return res.status(200).json({ message: "Switch deleted successfully" })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createSwitch,
  getAllSwitches,
  getSwitchById,
  updateSwitch,
  deleteSwitch,
}
