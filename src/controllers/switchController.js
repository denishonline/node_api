const switchService = require("../services/switchService")

const createSwitch = async (req, res) => {
  try {
    const switchRow = await switchService.createSwitch(req.body)
    return res.status(201).json(switchRow)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllSwitches = async (req, res) => {
  try {
    const switches = await switchService.getAllSwitches()
    return res.status(200).json(switches)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getSwitchById = async (req, res) => {
  const id = req.params.id
  try {
    const switchRow = await switchService.getSwitchById(id)
    if (!switchRow) {
      return res.status(404).json({ message: "Switch not found" })
    }
    return res.status(200).json(switchRow)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateSwitch = async (req, res) => {
  const id = req.params.id
  const updatedData = req.body
  try {
    const updatedSwitch = await switchService.updateSwitch(id, updatedData)
    if (!updatedSwitch) {
      return res.status(404).json({ message: "Switch not found" })
    }
    return res.status(200).json(updatedSwitch)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteSwitch = async (req, res) => {
  const id = req.params.id
  try {
    const deletedSwitch = await switchService.deleteSwitch(id)
    if (!deletedSwitch) {
      return res.status(404).json({ message: "Switch not found" })
    }
    return res.status(200).json({ message: "Switch deleted successfully" })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createSwitch,
  getAllSwitches,
  getSwitchById,
  updateSwitch,
  deleteSwitch,
}
