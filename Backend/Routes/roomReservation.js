const express = require('express');
const router = express.Router();

// Import controller functions
const { roomReservation, getreservation, getsinglereservation, cancelreservation } = require('../controllers/reservationController');

// Define routes using controller functions as middleware
router.get('/getreservation', getreservation);
router.get('/getonereservation', getsinglereservation);
router.post('/roomreservation', roomReservation);
router.delete('/cancelreservation/:id', cancelreservation); // Assuming you need to pass an ID to cancel reservation

module.exports = router;
