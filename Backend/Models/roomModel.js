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

    Max: {
      type: Number,
      default: null
    },

    Status:{
        type:String,
        require:true
    },

    Price: {
      type: Number,
      default: null
    },

})

module.exports = mongoose.model ('room', roomSchema )

