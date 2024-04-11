const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { Double } = require("mongodb");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

const menuSchema = new Schema({
   productName:{
      type:String,
      required:true
   },
  
   Price:{
      type: Number,
      required:true
   },
  
  Image: imageSchema,
});

module.exports = mongoose.model("menu",menuSchema);

