const NodeCache = require("node-cache")
const cache = new NodeCache()

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl || req.url
  const cachedData = cache.get(key)

  if (cachedData) {
    return res.json(cachedData)
  }

  res.sendResponse = res.json
  res.json = (body) => {
    cache.set(key, body /* expiration time in seconds */)
    res.sendResponse(body)
  }

  next()
}

module.exports = cacheMiddleware
