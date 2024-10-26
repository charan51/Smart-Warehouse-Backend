const express = require("express");
const {
  getDashboardList
} = require("../controllers/productRoute");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/getDashboard", getDashboardList);
module.exports = router;
