const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const validator = require('validator');
const { Double } = require("mongodb");

const stockSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      trim: true,
    },
    quantity: {
      type: Double,
      required: [true, "Please add a quantity"],
      trim: true,
    },
    price: {
      type: Double,
      required: [true, "Please add a price"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;