const mongoose=require('mongoose');
const signUPSchema=new mongoose.Schema({
    fullName:String,
    password:String,
    emailAddress:String,
    user_id:String
})

const Registeration=mongoose.model('Registeration',signUPSchema);
module.exports=Registeration