const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator');
const { Double } = require('mongodb');

const Schema = mongoose.Schema;

const watersportsSchema = new Schema({
    Activity: {
        type: String,
        required: true,
    },
    Time: {
        type: String,
        required: true,
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
