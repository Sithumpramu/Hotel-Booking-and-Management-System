const { default: mongoose } = require('mongoose')
const WatersportReservation = require("../Models/watersportReservModel");

// Function to add a new Reservation
const AddReserv = async (req, res) => {
    const { CusName,TelNo,Address,ActivityName,checkinTime,AdvancePayment } = req.body;
  
    try {
      // Use the `create` method to add a new document to the collection
      const newReserv = await WatersportReservation.create({ CusName,TelNo,Address,ActivityName,checkinTime,AdvancePayment});
      res.status(201).json(newReserv); // Respond with the created document
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = {AddReserv};