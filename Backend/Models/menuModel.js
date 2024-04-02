const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema ({

 productName:{
    type:String,
    required:true
 },

 imageUrl: {
    type: String,
    required: true
  },

 Price:{
    type: Number,
    required:true
 }

}, {timestamps:true})

module.exports = mongoose.model('menu',menuSchema)

