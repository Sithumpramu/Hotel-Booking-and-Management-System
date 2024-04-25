const mongoose = require('mongoose');

const Schema = mongoose.Schema

//const imageSchema = new Schema({
    //data: Buffer,
   // contentType: String,
 //. });

const offerSchema = new mongoose.Schema({
    offerID: {
        type:String,
        required: true
    },
    offerName: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    //Image:imageSchema,
    Image:[]
})

module.exports = mongoose.model('offers', offerSchema);