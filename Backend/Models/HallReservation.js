
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const hallReserveSchema = new Schema({

    Email:{
        type:String,
        require: true,
     
       
    },

    date:{
        type:String,
        require:true
    },

    startTime:{
        type:String,
        require:true
    },

    EndTIme: {
      type: String,
      require:true
    },
   
    hallName:{
        type: String,
      require:true
    },

    Resources:[]
  

})
module.exports = mongoose.model('HallReserve', hallReserveSchema)
