const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator');
const { Double } = require('mongodb');

const Schema = mongoose.Schema;

const watersportsSchema = new Schema({
    Activity: {
        type: String,
        required: true, // Corrected from `require`
    },
    Time: {
        type: String,
        required: true, // Corrected from `reqyire`
    },
    Price: {
        type: Number,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Watersport',watersportsSchema);
