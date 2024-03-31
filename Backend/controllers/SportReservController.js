const { default: mongoose } = require("mongoose");
const Watersport = require("../Models/watersportReservModel");
const watersportReservModel = require("../Models/watersportReservModel");

// Function to add a new reservation
const addReservation = async (req, res) => {
  const { CusName, TelNo, Address, ActivityName, checkinTime, AdvancePayment } = req.body;

  try {
    const newReserv = await watersportreservations.create({CusName, TelNo, Address, ActivityName, checkinTime, AdvancePayment});
    res.status(201).json(newReserv); // Respond with the created document
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = { addReservation };
