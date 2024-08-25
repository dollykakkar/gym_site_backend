const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({

})

const Admin = new mongoose.model("Admin", adminSchema);
module.exports = Admin;