const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema ({
 Name:{
    type:String,
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
 },

});

module.exports = mongoose.model('order',orderSchema)

