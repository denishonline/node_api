const { User } = require("../models") // Import the User model

// Controller actions for fetching user data
const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll() // Fetch all users from the database
      res.status(200).json(users) // Return users as JSON
    } catch (error) {
      console.error("Error fetching users:", error)
      res.status(500).send("Error fetching users") // Send an error response
    }
  },

  async getUserById(req, res) {
    const { id } = req.params
    try {
      const user = await User.findByPk(id) // Fetch user by ID from the database
      if (!user) {
        return res.status(404).send("User not found")
      }
      res.status(200).json(user) // Return user details as JSON
    } catch (error) {
      console.error("Error fetching user:", error)
      res.status(500).send("Error fetching user") // Send an error response
    }
  },

  // Other controller actions for creating, updating, or deleting users can be added here...
}

module.exports = userController
