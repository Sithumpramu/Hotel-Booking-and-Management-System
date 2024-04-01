const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// controller functions
const {roomReservation,getreservation,getsinglereservation,cancelreservation} = require('../controllers/reservationController')


//get all reservations
router.get('/getreservation', getreservation)

//get a reservation
router.get('/getonereservation', getsinglereservation)

//make a reseravtion
router.post('/roomreservation', roomReservation)

//cancel a reservation
router.delete('/cancelreservation', cancelreservation)