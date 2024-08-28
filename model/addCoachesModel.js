const mongoose = require("mongoose");

const coachesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    from:{
        type:Date,
        require:true
    },
    to:{
        type:Date,
        require:true
    },
    id:{
        type:String,
        unique:true,
        required:true
    }
})

const Coaches = new mongoose.model("Coaches", coachesSchema);
module.exports = Coaches;