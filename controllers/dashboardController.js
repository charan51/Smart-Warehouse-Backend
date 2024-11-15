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
exports.getLowStockList = async (req, res) => {
  try {
    const data = [
      {
          "productID": 1,
          "name": "Smartphone",
          "warehouse.name": "Main Warehouse",
          "warehouse.address": "123 Industrial Park, Chicago, IL",
          "stock": 500,
          "supplier.name": "Tech Distributors Inc.",
          "supplier.address": "123 Tech Lane, Silicon Valley, CA",
          "stockIN": [12,334,1,0,599,199,120,394,12,444],
          "stockOut": [2,12,1,0,400,99,20,34,2,4]
      },
      {
          "productID": 2,
          "name": "Laptop",
          "warehouse.name": "West Coast Distribution Center",
          "warehouse.address": "456 Pacific Blvd, San Francisco, CA",
          "stock": 200,
          "supplier.name": "Gadget World Ltd.",
          "supplier.address": "456 Gadget Road, New York, NY",
          "stockIN": [12,200,100,30,599,199,120,394,12,444],
          "stockOut": [11,12,10,10,2,99,20,34,2,4]
      },
      {
          "productID": 3,
          "name": "T-Shirt",
          "warehouse.name": "East Coast Hub",
          "warehouse.address": "789 Atlantic Ave, New York, NY",
          "stock": 1000,
          "supplier.name": "Fashion House",
          "supplier.address": "789 Fashion Ave, Los Angeles, CA",
          "stockIN": [12,334,1,0,599,199,120,394,12,444],
          "stockOut": [9,12,1,0,400,99,20,34,2,4]
      },
      {
          "productID": 4,
          "name": "Office Chair",
          "warehouse.name": "Main Warehouse",
          "warehouse.address": "123 Industrial Park, Chicago, IL",
          "stock": 150,
          "supplier.name": "Office Supplies Co.",
          "supplier.address": "101 Office St, Houston, TX",
          "stockIN": [122,334,100,90,599,199,120,394,12,444],
          "stockOut": [80,130,50,30,40,99,20,34,2,4]
      },
      {
          "productID": 5,
          "name": "Milk",
          "warehouse.name": "Midwest Storage Facility",
          "warehouse.address": "101 Cornfield Dr, Kansas City, MO",
          "stock": 50,
          "supplier.name": "Daily Groceries Ltd.",
          "supplier.address": "555 Market St, Miami, FL",
          "stockIN": [12,334,1,0,599,199,120,394,12,444],
          "stockOut": [10,12,1,0,400,99,20,34,2,4]
      },
      {
          "productID": 6,
          "name": "Notebook",
          "warehouse.name": "South Region Warehouse",
          "warehouse.address": "555 Southern Way, Dallas, TX",
          "stock": 300,
          "supplier.name": "Books & Stationery Corp.",
          "supplier.address": "987 Book St, Boston, MA",
          "stockIN": [120,40,100,200,200,129,120,394,12,44],
          "stockOut": [100,20,50,150,100,99,20,34,2,40]
      }
  ];
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}