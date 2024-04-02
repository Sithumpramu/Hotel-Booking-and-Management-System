const express = require('express')
const mongoose= require('mongoose')
const { getAllMenuDetails,getSingleMenuDetail} = require('../controllers/menuController')
const router = express.Router()


//get all reservations
router.get('/',getAllMenuDetails)

//get a single reservation
router.get('/:id',getSingleMenuDetail)


module.exports = router