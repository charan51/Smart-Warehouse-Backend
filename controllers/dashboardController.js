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
          "desc": "A sleek and modern device designed for seamless communication and entertainment. Features a high-resolution touchscreen, a powerful processor for smooth multitasking, long battery life, and advanced camera systems for capturing stunning photos and videos. Perfect for staying connected on the go.",
          "warehouse.name": "Main Warehouse",
          "warehouse.address": "123 Industrial Park, Chicago, IL",
          "stock": 500,
          "supplier.name": "Tech Distributors Inc.",
          "supplier.address": "123 Tech Lane, Silicon Valley, CA",
          "stockIN": [12,334,1,0,32,199,120,394,12,444],
          "stockOut": [2,12,1,0,400,99,20,34,2,4]
      },
      {
          "productID": 2,
          "name": "Laptop",
          "desc": "A portable and versatile computer built for productivity and entertainment. Equipped with a vivid display, a responsive keyboard, and ample storage. It offers fast processing speeds, long battery life, and multiple connectivity options, making it ideal for work, study, and entertainment.",
          "warehouse.name": "West Coast Distribution Center",
          "warehouse.address": "456 Pacific Blvd, San Francisco, CA",
          "stock": 200,
          "supplier.name": "Gadget World Ltd.",
          "supplier.address": "456 Gadget Road, New York, NY",
          "stockIN": [12,200,100,30,32,199,120,394,12,444],
          "stockOut": [11,12,10,10,2,99,20,34,2,4]
      },
      {
          "productID": 3,
          "name": "T-Shirt",
          "desc": "A comfortable and casual piece of clothing made from breathable fabric. Designed with a classic round or V-neck, it’s lightweight and perfect for everyday wear. Available in various colors and sizes, suitable for all seasons and styles.",
          "warehouse.name": "East Coast Hub",
          "warehouse.address": "789 Atlantic Ave, New York, NY",
          "stock": 1000,
          "supplier.name": "Fashion House",
          "supplier.address": "789 Fashion Ave, Los Angeles, CA",
          "stockIN": [12,334,1,0,32,199,120,394,12,444, 3,12,74],
          "stockOut": [9,12,1,0,400,99,20,34,2,4,23,45]
      },
      {
          "productID": 4,
          "name": "Office Chair",
          "warehouse.name": "Main Warehouse",
          "desc":"An ergonomic and adjustable chair designed for maximum comfort during long working hours. Features lumbar support, padded armrests, and a swivel base for easy mobility. Built with durable materials to enhance posture and reduce fatigue.",
          "warehouse.address": "123 Industrial Park, Chicago, IL",
          "stock": 150,
          "supplier.name": "Office Supplies Co.",
          "supplier.address": "101 Office St, Houston, TX",
          "stockIN": [122,334,100,90,59,199,120,394,12,444,123,12],
          "stockOut": [80,130,50,30,40,99,20,34,2,4,21,44]
      },
      {
          "productID": 5,
          "name": "Milk",
          "warehouse.name": "Midwest Storage Facility",
          "desc": "A nutritious and creamy liquid rich in calcium and protein. It’s perfect for drinking on its own, adding to coffee or tea, or using in cooking and baking. Available in whole, low-fat, or skim varieties to suit dietary needs.",
          "warehouse.address": "101 Cornfield Dr, Kansas City, MO",
          "stock": 50,
          "supplier.name": "Daily Groceries Ltd.",
          "supplier.address": "555 Market St, Miami, FL",
          "stockIN": [12,334,1,0,99,199,120,394,12,444,32,554,23],
          "stockOut": [10,12,1,0,400,99,20,34,2,4,33,212,33]
      },
      {
          "productID": 6,
          "name": "Notebook",
          "desc": "A compact and practical tool for jotting down notes, ideas, or sketches. Features lined or blank pages bound in a sturdy cover. Lightweight and portable, it’s an essential companion for students, professionals, and creatives alike.",
          "warehouse.name": "South Region Warehouse",
          "warehouse.address": "555 Southern Way, Dallas, TX",
          "stock": 300,
          "supplier.name": "Books & Stationery Corp.",
          "supplier.address": "987 Book St, Boston, MA",
          "stockIN": [120,40,100,200,200,129,120,394,12,44,33,66,44],
          "stockOut": [100,20,50,150,100,99,20,34,2,40,125,66,44]
      }
  ];
    res.status(200).json({ message: "success", data });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}