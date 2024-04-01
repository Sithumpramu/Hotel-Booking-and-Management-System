const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const {
    addReservation, 
    getReservations
  } = require("../controllers/SportReservController");


//add new activity
router.post('/add', addReservation);

//read activities
router.get("/", getReservations);

module.exports = router;