const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//controller functions
const {
  addStock,
  updateStock,
  getStocks,
  getStock,
  deleteStock,
} = require("../controllers/kitchenStockController");

const { upload } = require("");

//add stock route
router.post("/add", protect, addStock);
//update stock route
router.patch("/update/:id", protect, updateStock);
//get stocks route
router.get("/", protect, getStocks);
//get a single stock route
router.get("/:id", protect, getStock);
//delete stock route
router.delete("/delete/:id", protect, deleteStock);

module.exports = router;