CREATE TABLE products.Products (
    ProductID SERIAL PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Cost DECIMAL(10, 2),
    Barcode VARCHAR(50) UNIQUE,
    CategoryID INT NOT NULL REFERENCES Categories(CategoryID),
    SupplierID INT REFERENCES Suppliers(SupplierID), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- get products data
SELECT 
    p.ProductID AS "productID",
    p.ProductName AS "name",
    w.WarehouseName AS "warehouse.name",
    w.Location AS "warehouse.address",
    i.QuantityInStock AS "warehouse.stockCount",
    s.SupplierName AS "supplier.name",
    s.Address AS "supplier.address"
FROM 
    products.Products p
LEFT JOIN 
    warehouse.Inventory i ON p.ProductID = i.ProductID
LEFT JOIN 
    warehouse.Warehouse w ON i.WarehouseID = w.WarehouseID
LEFT JOIN 
    suppliers.Suppliers s ON p.SupplierID = s.SupplierID
-- stock in and out count
SELECT 
    i.StockInDate AS "date",
    SUM(i.QuantityInStock) AS "StockInCount",
    COUNT(i.StockOutDate) AS "StockOutCount"
FROM 
    warehouse.Inventory i
GROUP BY 
    i.StockInDate
ORDER BY 
    i.StockInDate;