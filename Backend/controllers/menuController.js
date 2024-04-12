const { ObjectId } = require("mongodb");
const menu = require("../Models/menuModel");
const mongoose = require("mongoose");

//get all reservations
const getAllMenuDetails = async (req, res) => {
  try {
    const menuList = await menu.find({});

    res.status(200).json(menuList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//create a menu 
const createMenuItem = async (req, res) => {
  const { category, productName, Price } = req.body;
  let imageData = {};

  // console.log(req.file, "file");

  // if (req.file) {
  //   //Assuming the file is uploaded and accessible via req.file
  //   imageData = {
  //     data: req.file.buffer, // Buffer containing file data
  //     contentType: req.file.mimetype, // Mime type of the file
  //   };
  // } else {
  //   return res.status(400).json({ error: "No image file provided." });
  // }

  try {
    const newMenu = await menu.create({
        category,
      productName,
      Price,
      // Image: imageData, // Store the image data directly
    });
    res.status(201).json(newMenu); // Respond with the created document
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to update an existing activity
const updateMenuItem = async (req, res) => {
  const { activityName } = req.params; // The name of the activity to update
  const { productName, Price } = req.body; // The new data for the activity

  try {
    const updatedActivity = await Watersport.findOneAndUpdate(
      { Activity: activityName }, // Find a document by its activity name
      { productName, Price }, // The new values
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


// Route to get menu items by category
const getMenuItemsByCategory = async (req, res) => {
  const category = req.params.category;

  try {
    // Query the database for menu items by category
    const menuItems = await menu.find({ category });

    if (menuItems.length === 0) {
      return res.status(404).json({ message: 'No menu items found for this category' });
    }

    res.status(200).json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllMenuDetails,
  
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getMenuItemsByCategory
};
