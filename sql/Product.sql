CREATE TABLE Products (
    ProductID SERIAL PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Cost DECIMAL(10, 2),
    Barcode VARCHAR(50) UNIQUE,
    CategoryID INT NOT NULL REFERENCES Categories(CategoryID),
    SupplierID INT NOT NULL REFERENCES Suppliers(SupplierID)
);
