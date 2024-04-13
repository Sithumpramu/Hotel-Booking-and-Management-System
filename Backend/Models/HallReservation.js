const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hallReserveSchema = new Schema({
    hall: {
        type: String,
        required: true
    },
    hallid: {
        type: Schema.Types.ObjectId, // Change type to ObjectId
        ref: 'Hall', // Reference the Hall model
        required: true
    },
    userid: {
        type: Schema.Types.ObjectId, // Change type to ObjectId
        ref: 'User', // Reference the User model
        required: true
    },
     eventtype:{
        type:String,
        require:true
    },
    capacity:{
          type:String,
          require:true
    },
    selectdate: {
        type: String,
        required: true
    },
    fromTime: {
        type: String,
        required: true
    },
    toTime: {
        type: String,
        required: true
    },
    totalhours: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'booked'
    },
    Resources: []
}, {
    timestamps: true
});

module.exports = mongoose.model('HallReserve', hallReserveSchema);
