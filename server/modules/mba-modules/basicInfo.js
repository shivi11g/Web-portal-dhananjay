const mongoose = require("mongoose");
const BasicInfoSchema = new mongoose.Schema({
  
    stdDetails:{
    Salutation:String,
    FirstName: String,
    MiddleName: String,
    LastName: String,
    DOB: String,
    Age:String,
    Abled: String,
    Category: String,
    AadharNo: String
    },
  
    GuardianDetails: {
    Salutation: String,
    Name: String,
    MobileNumber: String,
    Email: String,
    Occupation: String,
    AnnualIncome: String,
  },
});

const BasicInfo = mongoose.model("BasicInfo", BasicInfoSchema);

module.exports = BasicInfo;


