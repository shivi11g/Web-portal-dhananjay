const mongoose = require("mongoose");
const AdditionalInfoSchema = new mongoose.Schema({
  VideoCV: String,
  Linkedin: String,
});

const AdditionalInfo = mongoose.model("AdditionalInfo", AdditionalInfoSchema);
module.exports = AdditionalInfo;
