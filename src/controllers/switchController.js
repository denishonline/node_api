const { Switch } = require("../models") // Import the Switch model

// Controller methods for CRUD operations on Switch model
const switchController = {
  async getAllSwitches(req, res) {
    try {
      const switches = await Switch.findAll()
      res.status(200).json(switches)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async getSwitchById(req, res) {
    try {
      const { id } = req.params
      const switchData = await Switch.findByPk(id)
      if (!switchData) {
        return res.status(404).json({ message: "Switch not found" })
      }
      res.status(200).json(switchData)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async createSwitch(req, res) {
    try {
      const newSwitch = await Switch.create(req.body)
      res.status(201).json(newSwitch)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async updateSwitch(req, res) {
    try {
      const { id } = req.params
      const [updatedRowsCount] = await Switch.update(req.body, {
        where: { id },
      })
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Switch not found" })
      }
      res.status(200).json({ message: "Switch updated successfully" })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async deleteSwitch(req, res) {
    try {
      const { id } = req.params
      const deletedRowCount = await Switch.destroy({ where: { id } })
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Switch not found" })
      }
      res.status(200).json({ message: "Switch deleted successfully" })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
}

module.exports = switchController
