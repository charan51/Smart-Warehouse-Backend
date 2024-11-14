const express = require("express");
const {
  getDashboardList,
  getByBarCode
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/getDashboard", getDashboardList);
router.get("/getByBarCode/:barcode", getByBarCode);

module.exports = router;
