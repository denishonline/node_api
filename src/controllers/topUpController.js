const topUpService = require("../services/topUpService")

const createTopUp = async (req, res, next) => {
  try {
    const topUp = await topUpService.createTopUp(req.body)
    return res.status(201).json(topUp)
  } catch (error) {
    next(error)
  }
}

const getAllTopUps = async (req, res, next) => {
  try {
    const topUps = await topUpService.getAllTopUps()
    return res.status(200).json(topUps)
  } catch (error) {
    next(error)
  }
}

const getTopUpById = async (req, res, next) => {
  const id = req.params.id
  try {
    const topUp = await topUpService.getTopUpById(id)
    if (!topUp) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json(topUp)
  } catch (error) {
    next(error)
  }
}

const updateTopUp = async (req, res, next) => {
  const id = req.params.id
  const updatedData = req.body
  try {
    const updatedTopUp = await topUpService.updateTopUp(id, updatedData)
    if (!updatedTopUp) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json(updatedTopUp)
  } catch (error) {
    next(error)
  }
}

const deleteTopUp = async (req, res, next) => {
  const id = req.params.id
  try {
    const deletedTopUp = await topUpService.deleteTopUp(id)
    if (!deletedTopUp) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json({ message: "Top-up deleted successfully" })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createTopUp,
  getAllTopUps,
  getTopUpById,
  updateTopUp,
  deleteTopUp,
}
