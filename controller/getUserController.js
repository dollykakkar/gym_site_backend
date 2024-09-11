const User = require("../model/userModel")
const jwt = require("jsonwebtoken")

const getUser = async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        try {
            const findUser = await User.findOne({ email })
            if (findUser) {
                if (findUser.password === password) {
                    const token = jwt.sign({email,password}, "mysignature",{expiresIn:"3000s"})
                    console.log(token);
                    res.cookie("token", token)
                    // localStorage.setItem('token', token);
                    res.status(200).json({
                        token,
                        message: `Welcome ${findUser.username}`
                    });
                } else {
                    res.send("Incorrect Password")
                }
            } else {
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