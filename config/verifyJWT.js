// const jwt = require("jsonwebtoken")
// const User = require("../model/userModel")

// const verifyJWT = async (req,res)=>{
//     const auth = (req.headers['authorization'])
//     console.log(auth);
    
//    const token = auth.split(" ")[1]
//    console.log(token);
 
//     jwt.verify(token,"mysignature",(err,user)=>{
//     if (err) {
       
//         res.status(501).send("Session Expired")
//     }
//     if(user){
//         res.status(200).send("valid")
//     }
//  });
// }

// module.exports = verifyJWT



const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const verifyJWT = async (req, res) => {
    try {
        // Extract the token from the Authorization header
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(401).send("No token provided");

        const token = authHeader.split(" ")[1];
        if (!token) return res.status(401).send("No token provided");

        // Verify the token
        jwt.verify(token, "mysignature", async (err, decoded) => {
            if (err) {
                // Token verification failed
                return res.status(401).send("Session Expired");
            }

            // Token verified successfully, find user (if needed)
            const { email } = decoded;
            const findUser = await User.findOne({ email });

            if (!findUser) {
                // User not found
                return res.status(404).send("User not found");
            }

            // Token and user verification successful
            res.status(200).send("Token is valid");
        });
    } catch (error) {
        // Handle unexpected errors
        console.error("Unexpected error:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = verifyJWT;
