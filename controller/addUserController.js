const User = require("../model/userModel");

const addUser = async(req,res)=>{
    const userData = req.body
    if (userData) {
        if ( await User.findOne({username:userData.username})){
            res.send("This username is already taken.")
            return true;
        }
        if ( await User.findOne({email:userData.email})) {
            res.send("This Email already exists.")
            return true;
        }

        const newUser = new User({
            username :userData.username,
            email:userData.email,
            password:userData.password
        })

        try {
            await newUser.save()
            console.log("New user Added.")
            res.send("Sign up Successfully")
        } catch (error) {
            console.log(error);
            res.send("Server not responding")
        }
    } else {
        res.send("The server did not receive any data.")
    }
}

module.exports = addUser;