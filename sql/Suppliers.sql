CREATE TABLE Suppliers (
    SupplierID SERIAL PRIMARY KEY,
    SupplierName VARCHAR(255) NOT NULL,
    ContactDetails TEXT,
    Address TEXT,
    Email VARCHAR(255) UNIQUE,
    PhoneNumber VARCHAR(20)
);
