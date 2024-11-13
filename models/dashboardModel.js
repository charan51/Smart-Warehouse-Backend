const pool = require("../config/db");
const getWareHouseList = async () => {
  const { rows } = await pool.query(`
    SELECT 
    w.WarehouseName AS "Warehouse Name",
    w.Location AS "Location",
    i.QuantityInStock AS "Stock Level",
    p.ProductName AS "Product",
    c.CategoryName AS "Category",
    s.SupplierName AS "Supplier",
    i.BatchID AS "Batch ID",
    COUNT(i.BatchID) AS "Batch Count"
FROM 
    warehouse.Warehouse AS w
JOIN 
    warehouse.Inventory AS i ON w.WarehouseID = i.WarehouseID
JOIN 
    products.Products AS p ON i.ProductID = p.ProductID
JOIN 
    products.Categories AS c ON p.CategoryID = c.CategoryID
LEFT JOIN 
    suppliers.Suppliers AS s ON p.SupplierID = s.SupplierID
GROUP BY 
    w.WarehouseName, w.Location, i.QuantityInStock, p.ProductName, c.CategoryName, s.SupplierName, i.BatchID
ORDER BY 
    w.WarehouseName, p.ProductName;
    `);
  return rows;
};

const getSupplierAynlitList = async () => {
  const { rows } = await pool.query(`
      SELECT 
    s.SupplierName AS "Supplier",
    p.ProductName AS "Product",
    i.BatchID AS "Batch ID",
    w.WarehouseName AS "Warehouse",
    w.Location AS "Warehouse Location",
    i.QuantityInStock AS "Stock Level"
FROM 
    suppliers.Suppliers AS s
JOIN 
    products.Products AS p ON s.SupplierID = p.SupplierID
JOIN 
    warehouse.Inventory AS i ON p.ProductID = i.ProductID
JOIN 
    warehouse.Warehouse AS w ON i.WarehouseID = w.WarehouseID
ORDER BY 
    s.SupplierName, p.ProductName, i.BatchID;
      `);
  return rows;
};

const getWarehouseStockList = async () => {
  const { rows } = await pool.query(`
       SELECT 
    w.WarehouseName AS "Warehouse",
    w.Location AS "Location",
    SUM(i.QuantityInStock) AS "Total Stock Level"
FROM 
    warehouse.Warehouse AS w
JOIN 
    warehouse.Inventory AS i ON w.WarehouseID = i.WarehouseID
GROUP BY 
    w.WarehouseName, w.Location
ORDER BY 
    w.WarehouseName;
        `);
  return rows;
};

const getInventoryProductsList = async () => {
  const { rows } = await pool.query(`
        SELECT 
    i.InventoryID AS "Inventory ID",
    p.ProductName AS "Product",
    i.BatchID AS "Batch ID",
    w.WarehouseName AS "Warehouse",
    w.Location AS "Warehouse Location",
    i.QuantityInStock AS "Stock Level"
FROM 
    warehouse.Inventory AS i
JOIN 
    products.Products AS p ON i.ProductID = p.ProductID
JOIN 
    warehouse.Warehouse AS w ON i.WarehouseID = w.WarehouseID
ORDER BY 
    i.InventoryID, p.ProductName;
          `);
  return rows;
};
module.exports = {
  getWareHouseList,
  getSupplierAynlitList,
  getWarehouseStockList,
  getInventoryProductsList
};
