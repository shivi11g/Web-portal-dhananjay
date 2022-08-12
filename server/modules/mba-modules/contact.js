const mongoose =require('mongoose');
const contactSchema=new mongoose.Schema({
    email:String,
    alternateMobileNo:String,
    country:String,
    state:String,
    city:String,
    currentAddress:String,
    permanentAddress:String,
})

const Contact=mongoose.model("Contact",contactSchema);

module.exports=Contact;