const express = require('express');
const router = express.Router();

const { roomReservation } = require ('../controllers/ResvController')

router.post('/roomreservation', roomReservation);


module.exports = router