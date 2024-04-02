const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tableSchema = new Schema ({
 Date: {
    type:Date,
    default: Date.now,
    required:true
 },

 Name:{
    type:String,
    required:true
 },

 Capacity:{
   type:Number,
   required:true
 },

 email:{
    type:String,
    required:true,
    unique: true
 },

 contactNumber:{
    type: Number,
    required:true
 }

}, {timestamps:true})

module.exports = mongoose.model('table',tableSchema)

