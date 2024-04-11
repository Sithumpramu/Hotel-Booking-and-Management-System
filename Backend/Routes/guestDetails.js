const express = require('express');
const router = express.Router();

// Import controller functions
const {addguestDetails,getguestDetails } = require('../controllers/guestDetailsController');

// Define routes using controller functions as middleware

//get all reservations
router.get('/getguestDetails', getguestDetails);

//make a reservation
router.post('/guestDetails', addguestDetails);

module.exports = router;