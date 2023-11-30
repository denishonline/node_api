const userService = require("../services/userService")
const user = require("../models/user")

const userController = {
  async login(req, res, next) {
    const { email, password } = req.body

    try {
      const authResult = await userService.authenticateUser(email, password)

      if (!authResult) {
        return res.status(401).json({ message: "Invalid credentials" })
      }

      res.json({ user: authResult.user, token: authResult.token })
    } catch (err) {
      next(err)
    }
  },

  async getAllUsers(req, res, next) {
    try {
      //const users = await user.find()

      const users = [
        { name: "Ajay", email: "ajay@gmail.com" },
        { name: "Manish", email: "manish@gmail.com" },
      ]

      res.json(users)
    } catch (err) {
      next(err)
    }
  },

  // Other controller methods for user CRUD operations
}

module.exports = userController
