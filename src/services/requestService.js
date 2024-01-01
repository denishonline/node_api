const requestRepository = require("../repositories/requestRepository")

const createRequest = async (requestData) => {
  return await requestRepository.createRequest(requestData)
}

const getAllRequests = async () => {
  return await requestRepository.getAllRequests()
}

const getRequestById = async (id) => {
  return await requestRepository.getRequestById(id)
}

const updateRequest = async (id, updatedData) => {
  return await requestRepository.updateRequest(id, updatedData)
}

const deleteRequest = async (id) => {
  return await requestRepository.deleteRequest(id)
}

module.exports = {
  createRequest,
  getAllRequests,
  getRequestById,
  updateRequest,
  deleteRequest,
}
