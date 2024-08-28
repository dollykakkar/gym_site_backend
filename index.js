const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/dbConnection");
const app = express();
const cors = require("cors");
const addUser = require("./controller/addUserController");
const getUser = require("./controller/getUserController");
const addCoach = require("./controller/addCoachController");
const addAdmin = require("./controller/addAdminController");
const getAdmin = require("./controller/getAdminController");
const getCoaches = require("./controller/getCoachesController");
const addEquipment = require("./controller/addEquipmentController");

connectDB();
app.use(cors())
app.use(express.json())
const port = 5000;


app.post("/signup",addUser)
app.post("/login",getUser)
app.post("/addcoach",addCoach)
app.get("/getcoaches",getCoaches)
app.post("/addequipment" ,addEquipment)
app.post("/addadmin",addAdmin)
app.post("/getadmin",getAdmin)



app.listen(port,()=>{
    console.log(`we are listening at ${port}`);   
})