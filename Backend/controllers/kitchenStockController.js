/*const { default: mongoose } = require('mongoose')
const Stock = require("../Models/KitchenStockModel");
const jwt = require('jsonwebtoken')



// Add Stock
const addStock = async (req, res) => {
  const { name, category, quantity, price, description } = req.body;

  try {
    const stock = await Stock.add(name,category,quantity,price,description)

       res.status(200)
  } 
  catch (error) {
    res.status(400).json({error: error.message})
  }

}

// Get all Stocks
const getStocks = async (req, res) => {
  const stocks = await Stock.find({})
  res.status(200).json(stocks);
};

// Get single product
const getStock = async (req, res) => {
  const stock = await Stock.findById(req.params.id);
  // if product doesnt exist
  if (!stock) {
    res.status(404).json({error: 'no such product'});
  }
  // Match product to its user
 /* if (stock.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  res.status(200).json(stock);
};

// Delete Product
const deleteStock =async (req, res) => {
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
};

// Update Product
const updateStock = async (req, res) => {
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
};

module.exports = {
  addStock,
  getStocks,
  getStock,
  deleteStock,
  updateStock,
};*/


const { default: mongoose } = require('mongoose')
const Stock = require("../Models/KitchenStockModel");

// Function to add a new activity
const addStock = async (req, res) => {
    const { name, category,quantity, price,description } = req.body;
  
    try {
      // Use the `create` method to add a new document to the collection
      const stock = await Stock.create({ name, category,quantity, price,description });
      res.status(201).json(stock); // Respond with the created document
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

// Function to get all activities
const getStocks = async (req, res) => {
    try {
        const stocks = await Stock.find({});
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Function to delete an activity by name
const deleteStock = async (req, res) => {
    try {
        const { stockName } = req.params; // Assuming you're getting the activity name from the route parameter
        const result = await Stock.findOneAndDelete({ name: stockName });

        if (!result) {
            return res.status(404).json({ message: "Activity not found" });
        }

        res.status(200).json({ message: "Activity deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addStock, getStocks,deleteStock };