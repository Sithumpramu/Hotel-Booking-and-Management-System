const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const guestDetailsSchema = new Schema({

    firstName:{
        type:String,
        require:true
    },

    lastName: {
      type:String,
      require:true
    },

    email: {
      type:String,
      require:true
    },

    phoneNumber:{
        type:Number,
        require:true
    },

    address:{
        type:String,
        require:true
    },

    country:{
        type:String,
        require:true
    },

    city:{
        type:String,
        require:true
    },

//modai
    
})

module.exports = mongoose.model('guestDetails',guestDetailsSchema); //create collection

