const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const {
    addReservation, 
    getReservations,
    deleteReservation
  } = require("../controllers/SportReservController");


//add new reservation
router.post('/add', addReservation);

//read reservations
router.get("/", getReservations);

//delete a reservation
router.delete("/reservations/:id", deleteReservation);

module.exports = router;