const mongoose = require('mongoose')

// Define hotel schema
const hotelSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true 
    },
    address: {
         type: String,
          required: true 
    },
    Aboutus: {
         type: String, 
         required: true 
    },
    email: {
        type: email, 
        required: true 
    },
    phoneno: {
     type: Number, 
     required: true 
    },
    images: [{ type: String }], 

  });
  
  // Create hotel model
  const Hotel = mongoose.model('Hotel', hotelSchema);
  
  module.exports = Hotel;