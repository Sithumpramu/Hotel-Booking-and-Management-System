const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//controller functions
const {
  addStock,
  getStocks,
  deleteStock,
} = require('../controllers/kitchenStockController');


//add stock route
router.post('/add', addStock);
//update stock route

//get stocks route
router.get('/',getStocks);
//get a single stock route

//delete stock route
router.delete('/delete/:stockName',deleteStock);

module.exports = router;