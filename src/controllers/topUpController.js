const { TopUp } = require("../models") // Import the TopUp model

// Controller methods for CRUD operations on TopUp model
const topUpController = {
  async getAllTopUps(req, res) {
    try {
      const topUps = await TopUp.findAll()
      res.status(200).json(topUps)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async getTopUpById(req, res) {
    try {
      const { id } = req.params
      const topUp = await TopUp.findByPk(id)
      if (!topUp) {
        return res.status(404).json({ message: "TopUp not found" })
      }
      res.status(200).json(topUp)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async createTopUp(req, res) {
    try {
      const newTopUp = await TopUp.create(req.body)
      res.status(201).json(newTopUp)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async updateTopUp(req, res) {
    try {
      const { id } = req.params
      const [updatedRowsCount] = await TopUp.update(req.body, {
        where: { id },
      })
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "TopUp not found" })
      }
      res.status(200).json({ message: "TopUp updated successfully" })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async deleteTopUp(req, res) {
    try {
      const { id } = req.params
      const deletedRowCount = await TopUp.destroy({ where: { id } })
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "TopUp not found" })
      }
      res.status(200).json({ message: "TopUp deleted successfully" })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
}

module.exports = topUpController
