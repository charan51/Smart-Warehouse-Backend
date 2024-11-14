CREATE TABLE Suppliers.Suppliers (
    SupplierID SERIAL PRIMARY KEY,
    SupplierName VARCHAR(255) NOT NULL,
    ContactDetails TEXT,
    Address TEXT,
    Email VARCHAR(255) UNIQUE,
    PhoneNumber VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

