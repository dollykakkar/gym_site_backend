const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        
        const connect = await mongoose.connect("mongodb://localhost:27017/StaminaFitness")
        console.log("we are connected to DB");
        
    }catch(err){
        console.log(err);
        process.exit(1);
}
}

module.exports = connectDB