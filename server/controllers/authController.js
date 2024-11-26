const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  if (username !== ADMIN_USERNAME) {
    return res.status(400).json({ message: "Admin not found" });
  }

  if (password !== ADMIN_PASSWORD) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username: ADMIN_USERNAME }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
};

const getAdminDashboard = (req, res) => {
  res.json({ username: req.admin.username });
};

module.exports = {
  loginAdmin,
  getAdminDashboard,
};
