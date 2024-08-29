const Plans = require("../model/plansModel")

const addPlan = async(req,res)=>{
    const planDetails = req.body;
    if (planDetails) {
        try {
            await Plans.create(planDetails)
            res.send("new plan added");
        } catch (error) {
            res.send(error)
            console.log("error=>",error);
        }

    } else {
        res.send("Data not received")
    }
}
module.exports = addPlan