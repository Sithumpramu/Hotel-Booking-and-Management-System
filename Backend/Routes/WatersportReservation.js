const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const {
  addReservation,
  getReservations,
  deleteReservation,
  updateReservation,
  getReservationsByDateTime,
} = require("../controllers/SportReservController");

//add new reservation
router.post("/add", addReservation);

//read reservations
router.get("/", getReservations);

//get reservations by date and time
router.get("/getReservations", getReservationsByDateTime);

//delete a reservation
router.delete("/reservations/:id", deleteReservation);

//Update a reservation
router.put("/reservations/:id", updateReservation);

module.exports = router;
