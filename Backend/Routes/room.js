const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// controller functions
const { roomAdd } = require('../controllers/roomController'); 



// post a new workout
router.post('/', roomAdd); 

module.exports = router;