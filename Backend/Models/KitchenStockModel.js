const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;
const stockSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required:true,
    },
    quantity: {
      type: Number,
      required:true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },

);
module.exports = mongoose.model('Stock', stockSchema)