const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const {
    addReservation, 
    getReservations,
    deleteReservation,
    updateReservation
  } = require("../controllers/SportReservController");


//add new reservation
router.post('/add', addReservation);

//read reservations
router.get("/", getReservations);

//delete a reservation
router.delete("/reservations/:id", deleteReservation);

//Update a reservation
router.put("/reservations/:id", updateReservation);


module.exports = router;