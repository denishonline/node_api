const requestService = require("../services/requestService")

const createRequest = async (req, res, next) => {
  try {
    const request = await requestService.createRequest(req.body)
    return res.status(201).json(request)
  } catch (error) {
    next(error)
  }
}

const getAllRequests = async (req, res, next) => {
  try {
    const requests = await requestService.getAllRequests()
    return res.status(200).json(requests)
  } catch (error) {
    next(error)
  }
}

const getRequestById = async (req, res, next) => {
  const id = req.params.id
  try {
    const request = await requestService.getRequestById(id)
    if (!request) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json(request)
  } catch (error) {
    next(error)
  }
}

const updateRequest = async (req, res, next) => {
  const id = req.params.id
  const updatedData = req.body
  try {
    const updatedRequest = await requestService.updateRequest(id, updatedData)
    if (!updatedRequest) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json(updatedRequest)
  } catch (error) {
    next(error)
  }
}

const deleteRequest = async (req, res, next) => {
  const id = req.params.id
  try {
    const deletedRequest = await requestService.deleteRequest(id)
    if (!deletedRequest) {
      return res.status(404).json({ message: "Top-up not found" })
    }
    return res.status(200).json({ message: "Top-up deleted successfully" })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createRequest,
  getAllRequests,
  getRequestById,
  updateRequest,
  deleteRequest,
}
