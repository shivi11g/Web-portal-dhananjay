const mongoose=require("mongoose");
const testScoreSchema=new mongoose.Schema({
  ExamName:String,
  RollNumber:String,
  ExamMonthYear:String,
   ResultStatus:String,
  RankScore:String,
  Percentile:String,
  user_id:String
})
const TestScore=mongoose.model("TestScore",testScoreSchema)
module.exports=TestScore;