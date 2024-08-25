const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/dbConnection");
const app = express();
const cors = require("cors");
const addUser = require("./controller/addUserController");
const getUser = require("./controller/getUserController");

connectDB();
app.use(cors())
app.use(express.json())
const port = 6000


app.post("/signup",addUser)
app.post("/signin",getUser)




app.listen(port,()=>{
    console.log(`we are listening at ${port}`);   
})