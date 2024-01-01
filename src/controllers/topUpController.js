const topUpService = require("../services/topUpService")

const createTopUp = async (req, res) => {
  try {
    const topUp = await topUpService.createTopUp(req.body)
    return res.status(201).json(topUp)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllTopUps = async (req, res) => {
  try {
    const topUps = await topUpService.getAllTopUps()
    return res.status(200).json(topUps)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getTopUpById = async (req, res) => {
  const id = req.params.id
  try {
    const topUp = await topUpService.getTopUpById(id)
    if (!topUp) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json(topUp)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateTopUp = async (req, res) => {
  const id = req.params.id
  const updatedData = req.body
  try {
    const updatedTopUp = await topUpService.updateTopUp(id, updatedData)
    if (!updatedTopUp) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json(updatedTopUp)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteTopUp = async (req, res) => {
  const id = req.params.id
  try {
    const deletedTopUp = await topUpService.deleteTopUp(id)
    if (!deletedTopUp) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json({ message: "Top-up deleted successfully" })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createTopUp,
  getAllTopUps,
  getTopUpById,
  updateTopUp,
  deleteTopUp,
}
