const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const TestSchema = new Schema({

    Checkindate:{
        type:Date,
        require:true
    },

    Checkoutdate: {
      type:Date,
      require:true
    },



    NoOfGuests:{
        type:String,
        require:true
    },

    Name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    Address:{
        type:String,
        require:true
    },

    phoneno:{
        type:Number,
        require:true
    },




    
})

module.exports = mongoose.model('testreserv',TestSchema); //create collection

