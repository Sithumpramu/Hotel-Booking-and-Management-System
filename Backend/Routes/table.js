const express = require('express')
const mongoose= require('mongoose')
const {createReservation,getAllReservations,getSingleReservation,deleteReservation,updateReservation} = require('../controllers/tableController')
const router = express.Router()


//get all reservations
router.get('/',getAllReservations)

//get a single reservation
router.get('/:id',getSingleReservation)

 //POST a new reservation
router.post('/',createReservation)

 //DELETE reservation
router.delete('/:id',deleteReservation)

 //UPDATE reservation
router.patch('/:id',updateReservation)


module.exports = router