const { default: mongoose } = require('mongoose')
const Watersport = require("../Models/watersportsModel");

const AddActivity = async (req, res) => {
    const { Activity, Time, Price } = req.body;
  
    try {
      // Use the `create` method to add a new document to the collection
      const newActivity = await Watersport.create({ Activity, Time, Price });
      res.status(201).json(newActivity); // Respond with the created document
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = { AddActivity };


