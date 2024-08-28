const mongoose = require("mongoose");

const equipmentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:Boolean,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const Equipment = new mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;