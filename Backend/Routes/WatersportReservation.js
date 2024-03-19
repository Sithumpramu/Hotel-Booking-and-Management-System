const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {AddReserv} = require('../controllers/watersportReservController')




//add new activity
router.post('/add', AddReserv)



module.exports = router;