const jwt = require("jsonwebtoken")
const config = require("../../config/jwtSecret")

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]

  if (!token) {
    return res.status(403).json({ message: "Token not provided" })
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" })
    }
    req.user = decoded
    next()
  })
}

module.exports = verifyToken
