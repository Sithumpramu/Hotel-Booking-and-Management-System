const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const roomSchema = new Schema({


    Rname:{
        type:String,
        require:true
    },

    Rtype:{
        type:String,
        require:true
    },

    capacity: {
      type: Number,
      default: null
    },

    status:{
        type:String,
        require:true
    },

    price: {
      type: Number,
      default: null
    },

})

module.exports = mongoose.model ('room', roomSchema )

