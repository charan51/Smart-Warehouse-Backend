const pool = require("../config/db");
const getDashboardList = async () => {
  const { rows } = await pool.query(
    'SELECT p.ProductID AS "productID", p.ProductName AS "name", w.WarehouseName AS "warehouse.name", w.Location AS "warehouse.address", i.QuantityInStock AS "warehouse.stockCount", s.SupplierName AS "supplier.name", s.Address AS "supplier.address", i.StockInDate AS "date", SUM(i.QuantityInStock) OVER (PARTITION BY i.StockInDate) AS "StockInCount", COUNT(i.StockOutDate) OVER (PARTITION BY i.StockInDate) AS "StockOutCount" FROM products.Products p LEFT JOIN warehouse.Inventory i ON p.ProductID = i.ProductID LEFT JOIN warehouse.Warehouse w ON i.WarehouseID = w.WarehouseID LEFT JOIN suppliers.Suppliers s ON p.SupplierID = s.SupplierID ORDER BY i.StockInDate'
  );
  return rows;
};
const getProductByBarcode = async (barcode) => {
  const { rows } = await pool.query(`
    SELECT 
    p.ProductName AS "Product",
    p.Barcode AS "Barcode",
    c.CategoryName AS "Category",
    s.SupplierName AS "Supplier",
    p.Price AS "Price",
    p.Cost AS "Cost",
    p.Description AS "Description"
FROM 
    products.Products AS p
JOIN 
    products.Categories AS c ON p.CategoryID = c.CategoryID
LEFT JOIN 
    suppliers.Suppliers AS s ON p.SupplierID = s.SupplierID
WHERE 
    p.Barcode = $1;
    `, [barcode]);
  return rows;
};
module.exports = {
  getDashboardList,
  getProductByBarcode,
};
