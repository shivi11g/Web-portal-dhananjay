const mongoose =require('mongoose');
const experienceSchema=new mongoose.Schema({
    EmployerName:String,
    Industry:String,
    Designation:String,
    CurrentCTC:String,
    StartDate:String,
    EndDate:String,
    Responsibility:String
})

const Experience=mongoose.model("Experience",experienceSchema);

module.exports=Experience;