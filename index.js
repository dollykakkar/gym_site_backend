const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/dbConnection");
const cookieParser = require("cookie-parser")
const app = express();
const cors = require("cors");
const addUser = require("./controller/addUserController");
const getUser = require("./controller/getUserController");
const addCoach = require("./controller/addCoachController");
const addAdmin = require("./controller/addAdminController");
const getAdmin = require("./controller/getAdminController");
const getCoaches = require("./controller/getCoachesController");
const addEquipment = require("./controller/addEquipmentController");
const addPayment = require("./controller/addPaymentController");
const addPlan = require("./controller/addPlanController");
const addMember = require("./controller/addMemberController");
const verifyJWT = require("./config/verifyJWT");

connectDB();
app.use(cors())
app.use(cookieParser())
app.use(express.json())
const port = 5000;


app.post("/signup",addUser)
app.post("/login",getUser)
app.post("/addcoach",addCoach)
app.get("/getcoaches",getCoaches)
app.post("/addmember",addMember)
app.post("/addequipment" ,addEquipment)
app.post("/addpayment",addPayment)
app.post("/addplan",addPlan)
app.post("/addadmin",addAdmin)
app.post("/getadmin",getAdmin)
app.get("/verifyuser",verifyJWT)


app.listen(port,()=>{
    console.log(`we are listening at ${port}`);   
})