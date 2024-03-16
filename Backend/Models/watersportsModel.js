const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator');
const { Double } = require('mongodb');

const Schema = mongoose.Schema;

const watersportsSchema = new Schema({

    Activity:{
        type:String,
        require: true,
    },

    Time:{
        type:Time,
        reqyire:true,
    },

    Price:{
        type:Double,
        require:true
    },

})

const Watersport = mongoose.model("Watersport",watersportsSchema);
module.exports = Watersport;