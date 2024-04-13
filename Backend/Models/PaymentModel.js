const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paymentSchema = new Schema(
{
    c_name:{
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    },
    card_number:{
        type: String,
        required: true,
    },
    cvc:{
        type: String,
        required: true,
    },
    card_expiration:{
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});



module.exports = mongoose.model("Payment", paymentSchema);