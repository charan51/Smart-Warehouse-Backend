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
