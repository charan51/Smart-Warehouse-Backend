CREATE TABLE products.Categories (
    CategoryID SERIAL PRIMARY KEY,
    CategoryName VARCHAR(255) NOT NULL,
    Description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- product with category
SELECT 
    p.ProductName AS "Product",
    c.CategoryName AS "Category"
FROM 
    products.Products AS p
JOIN 
    products.Categories AS c ON p.CategoryID = c.CategoryID
ORDER BY 
    c.CategoryName, p.ProductName;
