const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Products
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

// API
app.get("/products", (req, res) => {
  res.json(products);
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});