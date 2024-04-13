const { default: mongoose } = require('mongoose')
const HallReserve =require('../Models/HallReservation')
const User = require('../Models/userModel'); // Import the User model
const Hall = require('../Models/hallModel'); // Import the Hall mode

const getAllReservations = async (req, res) => {
    try {
        const reservations = await HallReserve.find();
        if (reservations.length === 0) {
            return res.status(404).json({ success: false, message: 'No reservations found' });
        }
        res.json({ success: true, data: reservations });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getReservationById = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid reservation ID' });
        }
        
        const reservation = await HallReserve.findById(id);
        
        if (!reservation) {
            return res.status(404).json({ success: false, message: 'Reservation not found' });
        }
        
        res.json({ success: true, data: reservation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const editReservation = async (req, res) => {
    try {
        // Extract reservation ID from request parameters
        const { id } = req.params;

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid reservation ID' });
        }

        // Check if the reservation exists
        const existingReservation = await HallReserve.findById(id);
        if (!existingReservation) {
            return res.status(404).json({ success: false, message: 'Reservation not found' });
        }

        // Destructure updated reservation data from request body
        const { hall, hallid, userid,eventtype,capacity, selectdate, fromTime, toTime, totalhours, status, Resources } = req.body;

        // Update only the fields that are provided in the request body
        if (hall) existingReservation.hall = hall;
        if (hallid) existingReservation.hallid = hallid;
        if (userid) existingReservation.userid = userid;
        if (eventtype) existingReservation.eventtype = eventtype;
        if (capacity) existingReservation.capacity = capacity;
        if (selectdate) existingReservation.selectdate = selectdate;
        if (fromTime) existingReservation.fromTime = fromTime;
        if (toTime) existingReservation.toTime = toTime;
        if (totalhours) existingReservation.totalhours = totalhours;
        if (status) existingReservation.status = status;
        if (Resources) existingReservation.Resources = Resources;

        // Save the updated reservation
        const updatedReservation = await existingReservation.save();

        res.status(200).json({ success: true, message: 'Reservation updated successfully', data: updatedReservation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



const addReservation = async (req, res) => {
    try {
        // Destructure request body
        const { hallid, userid } = req.body;

        // Check if the provided userid exists
        const userExists = await User.findById(userid);
        if (!userExists) {
            return res.status(400).json({ success: false, message: 'Invalid userid' });
        }

        // Check if the provided hallid exists
        const hallExists = await Hall.findById(hallid);
        if (!hallExists) {
            return res.status(400).json({ success: false, message: 'Invalid hallid' });
        }

        // If userid and hallid are valid, proceed with creating the reservation
        const { hall,eventtype,capacity, selectdate, fromTime, toTime, totalhours, status, Resources } = req.body;
        const reservation = new HallReserve({
            hall,
            hallid,
            userid,
            eventtype,
            capacity,
            selectdate,
            fromTime,
            toTime,
            totalhours,
            status,
            Resources
        });

        // Save the reservation
        const savedReservation = await reservation.save();

        res.status(201).json({ success: true, message: 'Reservation added successfully', data: savedReservation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const deleteReservation = async (req, res) => {
    try {
        const {id } = req.params;

        // Check if the reservation exists
        const reservation = await HallReserve.findById(id);
        if (!reservation) {
            return res.status(404).json({ success: false, message: 'Reservation not found' });
        }

        // If the reservation exists, delete it
        await HallReserve.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
module.exports={addReservation,editReservation,getAllReservations,getReservationById,deleteReservation}
