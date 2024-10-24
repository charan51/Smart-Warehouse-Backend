const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/login", protect, getAllUsers);
module.exports = router;
