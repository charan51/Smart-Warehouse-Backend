CREATE TABLE Inventory (
    InventoryID SERIAL PRIMARY KEY,
    ProductID INT NOT NULL REFERENCES Products(ProductID),
    WarehouseID INT NOT NULL REFERENCES Warehouses(WarehouseID),
    QuantityInStock INT NOT NULL,
    StockInDate DATE NOT NULL,
    BatchID VARCHAR(50),
    TrackingID VARCHAR(50),
    StockOutDate DATE,
    StockStatus VARCHAR(20) CHECK (StockStatus IN ('In Stock', 'Low Stock', 'Out of Stock'))
);
