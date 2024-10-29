const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const productRoute = require('./routes/productRoutes');
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./config/swagger.json');
dotenv.config();
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoute);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
