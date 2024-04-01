const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const roomreservationSchema = new Schema({


    Checkindate:{
        type:Date,
        require:true
    },

    Checkoutdate: {
      type:Date,
      require:true
    },

    Rtype: {
      type:String,
      require:true
    },

    NoOfGuests:{
        type:String,
        require:true
    },


    
})

module.exports = mongoose.model('roomreservation',roomreservationSchema); //create collection

