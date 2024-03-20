// hallController.js
const { default: mongoose } = require('mongoose')
const Hall = require('../Models/hallModel');

// Get all halls
const getAllHalls = async (req, res) => {
    try {
        const halls = await Hall.find();
        res.json(halls);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new hall
const createHall = async (req, res) => {
    try {
        const newHall = new Hall(req.body);
        await newHall.save();
        res.status(201).json(newHall);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
const updateHall = async (req, res) => {
    const { id } = req.params;
    const { Name, description, capacity, price } = req.body;

    try {
        // Build the update object based on fields that have changed
        const updateFields = {};
        if (Name) updateFields.Name = Name;
        if (description) updateFields.description = description;
        if (capacity) updateFields.capacity = capacity;
        if (price) updateFields.price = price;

        // Find and update the hall only if at least one field has changed
        const hall = await Hall.findByIdAndUpdate(id, { $set: updateFields }, { new: true });

        if (!hall) {
            return res.status(404).json({ error: 'Hall not found' });
        }

        res.json(hall);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};




module.exports={ getAllHalls,createHall,updateHall}
