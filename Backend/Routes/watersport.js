const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {AddActivity} = require('../controllers/watersportController')




//add new activity
router.post('/add',AddActivity)


module.exports = router;