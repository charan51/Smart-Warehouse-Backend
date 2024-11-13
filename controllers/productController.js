const productModel = require("../models/productsModel");
exports.getDashboardList = async (req, res) => {
  try {
    const data = await productModel.getDashboardList();
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getByBarCode = async (req, res) => {
  try {
    const barCode = req.params.barcode;
    if(!barCode) {
      return  res.status(404).json({ message: "enter barcode" });
    }
    const data = await productModel.getProductByBarcode(barCode);
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
