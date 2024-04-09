const { default: mongoose } = require('mongoose')
const HallReserve =require('../Models/HallReservation')

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
        const { id } = req.params;
        
        // Validate if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid reservation ID' });
        }
        
        // Check if the request body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, message: 'Request body is empty' });
        }
        
        // Validate the request body fields if provided
        const { date, startTime, endTime, hallName } = req.body;
        if (date && typeof date !== 'string') {
            return res.status(400).json({ success: false, message: 'Date must be a string' });
        }
        if (startTime && typeof startTime !== 'string') {
            return res.status(400).json({ success: false, message: 'Start time must be a string' });
        }
        if (endTime && typeof endTime !== 'string') {
            return res.status(400).json({ success: false, message: 'End time must be a string' });
        }
        if (hallName && typeof hallName !== 'string') {
            return res.status(400).json({ success: false, message: 'Hall name must be a string' });
        }
        
        // Update the reservation and return the updated document
        const updatedReservation = await HallReserve.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedReservation) {
            return res.status(404).json({ success: false, message: 'Reservation not found' });
        }
        
        res.json({ success: true, data: updatedReservation, message: 'Reservation updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


const addReservation = async (req, res) => {
    try {
        // Check if the request body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, message: 'Request body is empty' });
        }

        // Validate the request body fields
        const { Email, date, startTime, EndTime, hallName, Resources } = req.body;
        if (!Email || typeof Email !== 'string') {
            return res.status(400).json({ success: false, message: 'Email is required and must be a string' });
        }
        if (!date || typeof date !== 'string') {
            return res.status(400).json({ success: false, message: 'Date is required and must be a string' });
        }
        if (!startTime || typeof startTime !== 'string') {
            return res.status(400).json({ success: false, message: 'Start time is required and must be a string' });
        }
        if (!EndTime || typeof EndTime !== 'string') {
            return res.status(400).json({ success: false, message: 'End time is required and must be a string' });
        }
        if (!hallName || typeof hallName !== 'string') {
            return res.status(400).json({ success: false, message: 'Hall name is required and must be a string' });
        }
        if (!Array.isArray(Resources)) {
            return res.status(400).json({ success: false, message: 'Resources must be an array' });
        }

        // Create a new reservation and save it
        const reservation = new HallReserve(req.body);
        await reservation.save();

        res.status(201).json({ success: true, message: 'Reservation added successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports={addReservation,editReservation,getAllReservations,getReservationById}
