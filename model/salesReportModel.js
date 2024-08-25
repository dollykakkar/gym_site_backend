const mongoose = require("mongoose");

const salesReportSchema = mongoose.Schema({

})

const salesReport = new mongoose.model("salesReport", salesReportSchema);
module.exports = salesReport;