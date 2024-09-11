const Members  = require("../model/gymMemberModel");

const addMember = async(req,res)=>{
    const memberData = req.body
    console.log(memberData);
    
    if (memberData) {
        const{name,phoneno,email,date}=memberData
        if ( await Members.findOne({phoneno:memberData.phoneno})){
            res.send("This Phone Number already exists.")
            return true;
        }
        if ( await Members.findOne({email:memberData.email})) {
            res.send("This Email already exists.")
            return true;
        }
        const newMember = new Members({
            name :memberData.name,
            email:memberData.email,
            phoneno:memberData.phoneno,
            date:memberData.date,
            plan:memberData.plan,
            price:memberData.price
        })
        try {
            await Members.create(newMember)
            console.log("New Member Added.")
            res.send("Added Successfully")
        } catch (error) {
            console.log(error);
            res.send("Server not responding")
        }
    } else {
        res.send("The server did not receive any data.")
    }
}

module.exports = addMember;