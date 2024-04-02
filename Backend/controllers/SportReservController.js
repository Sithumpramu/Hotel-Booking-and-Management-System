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

// Function to delete a reservation
const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params; 
    console.log(id, "Attempting to delete reservation");

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log(id, "Invalid ID format");
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await watersportReservModel.findByIdAndDelete(id);

    if (!result) {
      console.log(id, "Reservation not found");
      return res.status(404).json({ message: "Reservation not found" });
    }

    console.log(id, "Reservation deleted successfully");
    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addReservation, getReservations, deleteReservation };
