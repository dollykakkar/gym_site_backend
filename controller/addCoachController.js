const Coaches = require("../model/addCoachesModel");

const addCoach = async(req,res)=>{
    const coachData = req.body
    if (coachData) {
        if ( await Coaches.findOne({id:coachData.id})){
            res.send("The Id should be unique.")
            return true;
        }

        // const newUser = new User({
        //     username :userData.username,
        //     email:userData.email,
        //     password:userData.password
        // })

        try {
            await Coaches.create(coachData)
            console.log("New coach Added.")
            res.send("Added")
        } catch (error) {
            console.log(error);
            res.send("Server not responding")
        }
    } else {
        res.send("The server did not receive any data.")
    }
}

module.exports = addCoach;