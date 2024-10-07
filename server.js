const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", 
    info: {
      title: "Smart Inventory Management API",
      description: "API documentation for Smart Inventory Management",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000", 
      },
    ],
  },
  apis: ["./routes/*.js"], 
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

dotenv.config();
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
