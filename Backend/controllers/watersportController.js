const { default: mongoose } = require('mongoose')
const Watersport = require("../Models/watersportsModel");

// Function to add a new activity
const AddActivity = async (req, res) => {
    const { Activity, Time, Price, Description } = req.body;
  
    try {
      // Use the `create` method to add a new document to the collection
      const newActivity = await Watersport.create({ Activity, Time, Price, Description });
      res.status(201).json(newActivity); // Respond with the created document
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

// Function to get all activities
const getActivity = async (req, res) => {
    try {
        const activities = await Watersport.find({});
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Function to update an existing activity
const updateActivity = async (req, res) => {
    const { activityName } = req.params; // The name of the activity to update
    const { Activity, Time, Price, Description } = req.body; // The new data for the activity

    try {
        const updatedActivity = await Watersport.findOneAndUpdate(
            { Activity: activityName }, // Find a document by its activity name
            { Activity, Time, Price, Description }, // The new values
            { new: true } // Option to return the document after update
        );

        if (!updatedActivity) {
            return res.status(404).json({ message: "Activity not found" });
        }

        res.status(200).json(updatedActivity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Function to delete an activity by name
const deleteActivity = async (req, res) => {
    try {
        const { activityName } = req.params; // Assuming you're getting the activity name from the route parameter
        const result = await Watersport.findOneAndDelete({ Activity: activityName });

        if (!result) {
            return res.status(404).json({ message: "Activity not found" });
        }

        res.status(200).json({ message: "Activity deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {AddActivity, getActivity,deleteActivity,updateActivity};