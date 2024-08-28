const mongoose = require("mongoose");

const plansSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    validity:{
        type:Date,
        required:true,
    },
    amount:{
        type:Number,
        required:true
    }
})

const Plans = new mongoose.model("Plans", plansSchema);
module.exports = Plans;