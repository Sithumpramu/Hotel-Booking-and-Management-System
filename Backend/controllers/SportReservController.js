const { default: mongoose } = require("mongoose");
const Watersport = require("../Models/watersportReservModel");
const watersportReservModel = require("../Models/watersportReservModel");

// Function to add a new reservation
const addReservation = async (req, res) => {
  console.log("addReservation")
  const { CusName, TelNo, Address, checkinTime, AdvancePayment, activityIds } = req.body;

  try {
    const newReserv = await watersportReservModel.create({CusName, TelNo, Address, checkinTime, AdvancePayment, activityIds});
    res.status(201).json(newReserv); // Respond with the created document
  } catch (error) {
    console.log(error,"error")
    res.status(400).json({ error: error.message });
  }
};

// Function to get all reservations
const getReservations = async (req, res) => {
  try {
    const reservations = await watersportReservModel.find({});
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addReservation, getReservations };
