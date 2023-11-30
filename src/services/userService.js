const jwt = require("jsonwebtoken")
const config = require("../../config/jwtSecret")
const user = require("../models/user")

const userService = {
  async authenticateUser(email, password) {
    const user = await user.findOne({ email })

    if (!user || !user.comparePassword(password)) {
      return null
    }

    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "1h",
    })
    return { user, token }
  },

  // Other user service methods (e.g., createUser, getUserById, updateUser, etc.)
}

module.exports = userService
