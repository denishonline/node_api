const { Request } = require("../models") // Import the Request model

// Create a new request

const requestController = {
  async createRequest(req, res, next) {
    try {
      const newRequest = await Request.create(req.body)
      res.status(201).json(newRequest)
    } catch (error) {
      next(error)
    }
  },

  // Get all requests
  async getAllRequests(req, res, next) {
    try {
      const requests = await Request.findAll()
      res.status(200).json(requests)
    } catch (error) {
      next(error)
    }
  },

  // Get a request by ID
  async getRequestById(req, res, next) {
    try {
      const { id } = req.params
      const request = await Request.findByPk(id)
      if (!request) {
        return res.status(404).json({ error: "Request not found" })
      }
      res.status(200).json(request)
    } catch (error) {
      next(error)
    }
  },

  // Update a request by ID
  async updateRequest(req, res, next) {
    try {
      const { id } = req.params
      const [updated] = await Request.update(req.body, {
        where: { id: id },
      })
      if (updated) {
        const updatedRequest = await Request.findByPk(id)
        return res.status(200).json(updatedRequest)
      }
      throw new Error("Request not found")
    } catch (error) {
      next(error)
    }
  },

  // Delete a request by ID
  async deleteRequest(req, res, next) {
    try {
      const { id } = req.params
      const deleted = await Request.destroy({
        where: { id: id },
      })
      if (!deleted) {
        throw new Error("Request not found")
      }
      res.status(204).send()
    } catch (error) {
      //res.status(500).json({ error: error.message })
      next(error)
    }
  },
}

module.exports = requestController
