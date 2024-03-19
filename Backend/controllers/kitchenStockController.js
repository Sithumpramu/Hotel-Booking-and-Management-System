const { default: mongoose } = require('mongoose')
const Stock = require("../Models/KitchenStockModel");



// Add Stock
const addStock = async (req, res) => {
  const { name, category, quantity, price, description } = req.body;

  // Add Stock
  try{
  const stock = await Stock.add({
    name,
    category,
    quantity,
    price,
    description
  });
  res.status(201).json(newActivity);
}
catch (error){
    res.status(400).json({ error: error.message });
}

  
};

// Get all Stocks
const getStocks = async (req, res) => {
    try{
  const stocks = await Stock.find({ });
  res.status(200).json(stocks);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
};

// Get single product
const getStock = async (req, res) => {
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
};

// Delete Product
const deleteStock = async (req, res) => {
    try{
        const{stockName} = req.params;
        const result = await Stock.findOneAndDelete({name: stockName});
  // if product doesnt exist
  if (!result) {
    res.status(404).json({message:"Product not found"});
  }
  // Match product to its user
  res.status(200).json({message:"Activity deleted successfully"});
}
  catch(error){
    res.status(500).json({error: error.message})
}
  
};

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