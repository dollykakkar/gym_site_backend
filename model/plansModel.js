const mongoose = require("mongoose");

const plansSchema = mongoose.Schema({

})

const Plans = new mongoose.model("Plans", plansSchema);
module.exports = Plans;