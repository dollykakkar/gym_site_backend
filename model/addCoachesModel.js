const mongoose = require("mongoose");

const coachesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    from:{
        type:Date,
        
    }
})

const Coaches = new mongoose.model("Coaches", coachesSchema);
module.exports = Coaches;