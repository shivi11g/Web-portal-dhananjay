const mongoose=require('mongoose');
const rewardsSchema=new mongoose.Schema({
    RewardsDescription:String,
    Level:String,
    YearReceived:String
})

const Rewards=mongoose.model('Rewards',rewardsSchema);
module.exports=Rewards