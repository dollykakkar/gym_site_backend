const User = require("../model/userModel")

const getUser = async(req,res)=>{
    const {email,password} = req.body
    if (email&&password) {
        try {
            const findUser = await User.findOne({email})            
            if (findUser) {
                if (!(findUser.password != password)) {
                    res.send(`welcome ${findUser.username}`)
                }else{
                    
                    res.send("Incorrect Password")
                }
            }else{
                res.send("this email is not registered")
            }
        } catch (error) {
            res.send("data not matched")
            console.log(error);
            
        }
    } else {
        console.log("data not received from client side.");
        res.send("Server did not receive any data.")
    }
}

module.exports = getUser