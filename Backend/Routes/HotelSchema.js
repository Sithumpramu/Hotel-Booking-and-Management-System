const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {getAllDetails, createDetails} = require('../controllers/userController')

router.get('/hoteldetails',getAllDetails)
router.post('/Addhoteldetails',createDetails)

module.exports = router