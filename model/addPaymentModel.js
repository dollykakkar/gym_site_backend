const mongoose = require("mongoose");

const addPayementSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    plan:{
        type:String,
        require:true,
    },
    amount:{
        type:Number,
        require:true
    }, 
    date:{
        type:Date,
        require:true,
    }
})

const Payment = new mongoose.model("Payment", addPayementSchema);
module.exports = Payment;