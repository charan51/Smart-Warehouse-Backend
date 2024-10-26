const productModel = require("../models/productsModel");
exports.getDashboardList = async (req, res) => {
  try {
    const data = await productModel.getDashboardList();
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
