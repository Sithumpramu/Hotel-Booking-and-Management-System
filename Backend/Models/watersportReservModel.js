const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator');
const { Double } = require('mongodb');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    CusName: {
        type: String,
        required: true, 
    },
    TelNo: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    checkinDate:{
        type: String,
        required: true,
    },
    checkinTime:{
        type: String,
        required: true,
    },
    AdvancePayment: {
        type: Number,
        required: true,
    },
    activityIds: {
        type: Array,
        required: true,
    },
    
});

module.exports = mongoose.model('WatersportReservation',ReservationSchema);