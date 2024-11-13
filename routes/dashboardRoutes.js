const express = require("express");
const {
  getDashboardList,
  getSupplierList
} = require("../controllers/dashboardController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/getWarehouseDashboard", getDashboardList);
router.get("/getSupplierDashboard", getSupplierList);
router.get("/getInventoryDashboard", getSupplierList);
module.exports = router;
