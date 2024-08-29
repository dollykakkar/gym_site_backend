const Admin = require("../model/adminInfoModel");

const addAdmin = async(req,res)=>{
    const adminData = req.body
    if (adminData) {
        if ( await Admin.findOne({username:adminData.username})){
            res.send("This username is already taken.")
            return true;
        }
        if ( await Admin.findOne({email:adminData.email})) {
            res.send("This Email already exists.")
            return true;
        }
        if ( await Admin.findOne({contact:adminData.contact})) {
            res.send("This Contact already exists.")
            return true;
        }
        const newAdmin = new Admin({
            name:adminData.name,
            username :adminData.username,
            email:adminData.email,
            contact:adminData.contact,
            password:adminData.password
        })
        try {
            await newAdmin.save()
            console.log("New Admin Added.")
            res.send("Added Successfully")
        } catch (error) {
            console.log(error);
            res.send("Server not responding")
        }
    } else {
        res.send("The server did not receive any data.")
    }
}

module.exports = addAdmin;