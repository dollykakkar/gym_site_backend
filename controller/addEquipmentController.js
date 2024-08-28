const Equipment = require("../model/equipmentModel");

const addEquipment = async(req,res)=>{
    const equipmentDetails = req.body;
    if (equipmentDetails) {
        try {
            await Equipment.create(equipmentDetails)
            res.send("Added Successfully");
            console.log("Added");
            
        } catch (error) {
            res.send("Server Error");
            console.log(error);
        }
    }else{
        res.send("No data receieved")
    }
}
module.exports = addEquipment;