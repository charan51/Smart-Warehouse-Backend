const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const productRoute = require("./routes/productRoutes");
const dashboardRoute = require("./routes/dashboardRoutes");
const cors = require("cors");
const http = require('http');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger.json");
const { Client } = require("pg");
const { Server } = require("socket.io");
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your React app's URL
    methods: ["GET", "POST"],
  },
});
// PostgreSQL connection configuration
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
}
});

(async () => {
  try {
    // Connect to the PostgreSQL database
    await client.connect();
    console.log('Connected to PostgreSQL database.');

    // Listen to the channel
    const channelName = 'inventory_channel';
    await client.query(`LISTEN ${channelName}`);
    console.log(`Listening on channel: ${channelName}`);

    // Event listener for notifications
    client.on('notification', (msg) => {
      console.log('Received notification:', msg.payload);
      const data = JSON.parse(msg.payload);
      io.emit("inventory-update", data);

      console.log('Notification details:', data);
    });

    // Keep the process running
    console.log('Waiting for notifications...');
  } catch (err) {
    console.error('Error:', err);
  }
})();
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});
// Handle process exit
process.on('SIGINT', async () => {
  console.log('Disconnecting...');
  await client.end();
  process.exit();
});
const createSubscriber = require("pg-listen");

dotenv.config();
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoute);
app.use("/api/dashboard", dashboardRoute);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Initialize the listener
const subscriber = createSubscriber({
  connectionString:
    "postgres://smartwarehouse:smartwarehouse1234@smartwarehouse1.cje4wggum7u0.us-east-1.rds.amazonaws.com/smartwarehouse",
});

// Define the event handler
subscriber.notifications.on("inventory_channel", (payload) => {
  console.log("Received notification:", payload);

  // Example: Emit real-time updates to clients via WebSocket
  // wsServer.broadcast(JSON.stringify(payload));
});

// Handle connection errors
subscriber.events.on("error", (error) => {
  console.error("Error with PostgreSQL listener:", error);
});

// Start listening
(async () => {
  try {
    await subscriber.connect();
    await subscriber.listenTo("inventory_channel");
    console.log("Listening for inventory updates...");
  } catch (err) {
    console.error("Failed to start listener:", err);
  }
})();
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
