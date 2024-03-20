// hallController.js
const { default: mongoose } = require('mongoose')
const Hall = require('../models/Hall');

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
module.exports={ getAllHalls,createHall}
