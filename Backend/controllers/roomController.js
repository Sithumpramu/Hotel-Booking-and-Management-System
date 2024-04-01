const { default: mongoose } = require('mongoose')
const room = require('../Models/roomModel')

//Add a room
const roomAdd = async (req, res) => {
  const { Rname, Rtype, capacity, status, price } = req.body; // Correct the variable name 'status' to 'Status'

  try {
      const newRoom = new room({ Rname, Rtype, capacity, status, price }); // Create a new room object
      await newRoom.save(); // Save the new room to the database
      res.status(201).json(newRoom); // Respond with the newly created room
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = { roomAdd };