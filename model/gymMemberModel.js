const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    phoneNo:{
        type:Number,
        require:true,
        unique:true,
    },
    date:{
        type:Date,
        require:true,
    },
    plan:{
        type:String,
        require:true,
    },
    amount:{
        type:Number,
        require:true
    }

})

const Members = new mongoose.model("members", memberSchema);
module.exports = Members;