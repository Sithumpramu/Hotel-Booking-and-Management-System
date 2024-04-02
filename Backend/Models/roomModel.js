const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const roomSchema = new Schema({


    Rid:{
      type:Number,
      require:true
    },

    Rtype:{
        type:String,
        require:true
    },

    description: {
      type: String,
      default:true
    },

    capacity: {
      type: Number,
      default: null
    },

    NoOfBeds:{
      type:Number,
      require:true
  },

    price: {
      type: Number,
      default: null
    },

    status:{
      type:String,
      require:true
  },

})

module.exports = mongoose.model ('room', roomSchema )

