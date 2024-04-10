const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const { Double } = require("mongodb");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

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
  Image:imageSchema,

});

module.exports = mongoose.model ('room', roomSchema )

