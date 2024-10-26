const pool = require("../config/db");
const getDashboardList = async () => {
  const result = await pool.query(
    'SELECT p.ProductID AS "productID", p.ProductName AS "name", w.WarehouseName AS "warehouse.name", w.Location AS "warehouse.address", i.QuantityInStock AS "warehouse.stockCount", s.SupplierName AS "supplier.name", s.Address AS "supplier.address" FROM products.Products p LEFT JOIN warehouse.Inventory i ON p.ProductID = i.ProductID LEFT JOIN warehouse.Warehouse w ON i.WarehouseID = w.WarehouseID LEFT JOIN suppliers.Suppliers s ON p.SupplierID = s.SupplierID'
  );
  const stockData = await pool.query(
    'SELECT i.StockInDate AS "date", SUM(i.QuantityInStock) AS "StockInCount", COUNT(i.StockOutDate) AS "StockOutCount" FROM warehouse.Inventory i GROUP BY  i.StockInDate ORDER BY i.StockInDate'
  );
  return { products: result.rows, stockData: stockData.rows };
};

module.exports = {
  getDashboardList,
};