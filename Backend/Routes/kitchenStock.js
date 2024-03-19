const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//controller functions
const {
  addStock,
 // updateStock,
  getStocks,
  getStock,
  deleteStock,
} = require("../controllers/kitchenStockController");


//add stock route
router.post("/add",  addStock);
//update stock route
//router.patch("/update/:id",  updateStock);
//get stocks route
router.get("/",  getStocks);
//get a single stock route
router.get("/:id",  getStock);
//delete stock route
router.delete("/delete/:id",deleteStock);

module.exports = router;