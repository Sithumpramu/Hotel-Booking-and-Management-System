const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator');
const { Double } = require("mongodb");

const stockSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true, 
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Double,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;