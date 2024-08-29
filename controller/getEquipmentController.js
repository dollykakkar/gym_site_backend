const Equipment = require("../model/equipmentModel");

const getEquipment = async(req,res)=>{
    try {
         const allEquipment = await Equipment.find()
         console.log(allCoaches);
         res.send(allCoaches)
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

module.exports = getEquipment;