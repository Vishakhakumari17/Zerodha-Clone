require('dotenv').config(); 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: "https://zerodha-frontend-9yvn.onrender.com", 
  credentials: true,
}));
app.use(bodyParser.json());


// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("✅ Zerodha Clone Backend is running!");
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log("Signup Data Received:", username, email, password);
  res.status(201).json({ message: "Signup successful!" });
});


app.get('/allHoldings', async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri)
   .then(() => console.log("DB connected!"))
    .catch((err) => console.error("DB connection error:", err));
});
