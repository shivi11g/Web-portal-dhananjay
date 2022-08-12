const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
  secEdu: {
    Type: String,
    School: String,
    Board: String,
    PassingYear: String,
    Subjects: String,
    Result: String,
  },
  highEdu: {
    Type: String,
    School: String,
    Board: String,
    PassingYear: String,
    Subjects: String,
    Result: String,
  },
  BachEdu: {
    Degree: String,
    Specialization: String,
    DegreeType: String,
    StartYear: String,
    FinishYear: String,
    University: String,
    Result: String,
  },
  MasterEdu: {
    Degree: String,
    Specialization: String,
    DegreeType: String,
    StartYear: String,
    FinishYear: String,
    University: String,
    Result: String,
  },
  DiplomaEdu: {
    DiplomaType: String,
    Board: String,
    PassingYear: String,
    Result: String,
  }
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
