const express = require("express");
const {
  getDashboardList,
  getSupplierList,
  getLowStockList
} = require("../controllers/dashboardController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.get("/getLowStock", getLowStockList);
router.get("/getWarehouseDashboard", getDashboardList);
router.get("/getSupplierDashboard", getSupplierList);
router.get("/getInventoryDashboard", getSupplierList);
module.exports = router;
