const jwt = require("jsonwebtoken")

// Simulated user credentials (Replace this with your actual authentication logic)
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
]

function login(req, res) {
  // Check credentials (Replace this with your actual authentication logic)
  const { username, password } = req.body
  const user = users.find(
    (u) => u.username === username && u.password === password
  )

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" })
  }

  // Generate JWT token
  const accessToken = jwt.sign({ username: user.username }, "your-secret-key")
  res.json({ accessToken })
}

function protected(req, res) {
  res.json({ message: "This is a protected route" })
}

module.exports = { login, protected }
