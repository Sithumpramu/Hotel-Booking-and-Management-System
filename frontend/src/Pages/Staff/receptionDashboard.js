const { default: mongoose } = require("mongoose");
const watersportReservations = require("../Models/watersportReservModel");

// Function to get all activities
const getActivity = async (req, res) => {
    try {
      const wReserv = await watersportReservations.find({});
      res.status(200).json(wReserv);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };