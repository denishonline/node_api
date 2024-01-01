const Request = require("../models/Request")

const createRequest = async (requestData) => {
  return await Request.create(requestData)
}

const getAllRequests = async () => {
  return await Request.findAll()
}

const getRequestById = async (id) => {
  return await Request.findByPk(id)
}

const updateRequest = async (id, updatedData) => {
  const request = await getRequestById(id)
  if (!request) return null
  return await request.update(updatedData)
}

const deleteRequest = async (id) => {
  const request = await getRequestById(id)
  if (!request) return null
  return await request.destroy()
}

module.exports = {
  createRequest,
  getAllRequests,
  getRequestById,
  updateRequest,
  deleteRequest,
}
