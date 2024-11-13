const dashboardModel = require("../models/dashboardModel");
exports.getDashboardList = async (req, res) => {
  try {
    const data = await dashboardModel.getWareHouseList();
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSupplierList = async (req, res) => {
  try {
    const data = await dashboardModel.getSupplierAynlitList();
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getInventoryProductList = async (req, res) => {
  try {
    const data = await dashboardModel.getInventoryProductsList();
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
