const { default: mongoose } = require('mongoose')
const asyncHandler = require("express-async-handler");
const Stock = require("../Models/KitchenStockModel");



// Add Stock
const addStock = asyncHandler(async (req, res) => {
  const { name, category, quantity, price, description } = req.body;

  //   Validation
  if (!name || !category || !quantity || !price || !description) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Add Stock
  const stock = await Stock.add({
    user: req.user.id,
    name,
    category,
    quantity,
    price,
    description,
  });

  res.status(201).json(stock);
});

// Get all Stocks
const getStocks = asyncHandler(async (req, res) => {
  const stocks = await Stock.find({ user: req.user.id }).sort("-createdAt");
  res.status(200).json(stocks);
});

// Get single product
const getStock = asyncHandler(async (req, res) => {
  const stock = await Stock.findById(req.params.id);
  // if product doesnt exist
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Match product to its user
  if (stock.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  res.status(200).json(product);
});

// Delete Product
const deleteStock = asyncHandler(async (req, res) => {
  const stock = await Stock.findById(req.params.id);
  // if product doesnt exist
  if (!stock) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Match product to its user
  if (stock.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await stock.remove();
  res.status(200).json({ message: "Product deleted." });
});

// Update Product
const updateStock = asyncHandler(async (req, res) => {
  const { name, category, quantity, price, description } = req.body;
  const { id } = req.params;

  const stock = await Stock.findById(id);

  // if product doesnt exist
  if (!stock) {
    res.status(404);
    throw new Error("Product not found");
  }
  // Match product to its user
  if (stock.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  // Update Product
  const updatedStock = await Stock.findByIdAndUpdate(
    { _id: id },
    {
      name,
      category,
      quantity,
      price,
      description,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(updatedProduct);
});

module.exports = {
  addStock,
  getStocks,
  getStock,
  deleteStock,
  updateStock,
};