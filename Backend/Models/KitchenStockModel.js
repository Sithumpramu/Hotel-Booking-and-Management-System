const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator');
const { Double } = require("mongodb");

const Schema = mongoose.Schema;
const stockSchema = new Schema(
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

module.exports = mongoose.model("Stock", stockSchema);