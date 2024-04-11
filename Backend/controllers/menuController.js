const { ObjectId } = require('mongodb')
const Table = require('../Models/menuModel')
const mongoose = require('mongoose')

//get all reservations
const getAllMenuDetails = async (req, res) => {

    const menu = await menu.find({}).sort({ createdAt: -1 })

    res.status(200).json(menu)
}


//get a single reservation 
const getSingleMenuItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types > ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such ID!' })
    }

    const menu = await menu.findById(id)

    if (!menu) {
        return res.status(404).json({ error: 'No Menu Details!' })
    }

    res.status(200).json(menu)
}



const createMenuItem = async (req, res) => {
    const { productName, Price } = req.body;
    let imageData = {};

    console.log(req.file, "file");

    if (req.file) {
        // Assuming the file is uploaded and accessible via req.file
        imageData = {
            data: req.file.buffer, // Buffer containing file data
            contentType: req.file.mimetype, // Mime type of the file
        };
    } else {
        return res.status(400).json({ error: "No image file provided." });
    }

    try {
        const newActivity = await menu.create({
            productName,
            Price,
            Image: imageData, // Store the image data directly
        });
        res.status(201).json(newActivity); // Respond with the created document
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Function to update an existing activity
const updateMenuItem = async (req, res) => {
    const { activityName } = req.params; // The name of the activity to update
    const {productName, Price} = req.body; // The new data for the activity

    try {
        const updatedActivity = await Watersport.findOneAndUpdate(
            { Activity: activityName }, // Find a document by its activity name
            {productName, Price}, // The new values
            { new: true } // Option to return the document after update
        );

        if (!updatedActivity) {
            return res.status(404).json({ message: "Menu Item not found" });
        }

        res.status(200).json(updatedActivity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params; // Capture the `id` from URL parameters
        // Validate id format to ensure it is a valid ObjectId

        console.log(id, "deleteMenuItem");
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const result = await menu.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "Menu Item not found" });
        }

        res.status(200).json({ message: "Menu Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = {
    getAllMenuDetails, getSingleMenuItem, createMenuItem,updateMenuItem, deleteMenuItem
}