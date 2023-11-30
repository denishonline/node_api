const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  // Define user schema fields
})

const user = mongoose.model("user", userSchema)

module.exports = user
