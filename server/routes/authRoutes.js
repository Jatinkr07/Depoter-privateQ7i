const express = require("express");
const {
  loginAdmin,
  getAdminDashboard,
} = require("../controllers/authController");
const protectAdminRoute = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/dashboard", protectAdminRoute, getAdminDashboard);

module.exports = router;
