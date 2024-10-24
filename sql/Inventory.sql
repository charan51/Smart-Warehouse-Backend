CREATE TABLE warehouse.Inventory (
    InventoryID SERIAL PRIMARY KEY,
    ProductID INT NOT NULL REFERENCES Products(ProductID),
    WarehouseID INT NOT NULL REFERENCES Warehouses(WarehouseID),
    QuantityInStock INT NOT NULL,
    StockInDate DATE NOT NULL,
    BatchID VARCHAR(50) DEFAULT NULL,
    TrackingID VARCHAR(50) DEFAULT NULL,
    StockOutDate DATE DEFAULT NULL,
    StockStatus VARCHAR(20) CHECK (StockStatus IN ('In Stock', 'Low Stock', 'Out of Stock')) NOT NULL,
    created_by INT NOT NULL REFERENCES Users(UserID),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
