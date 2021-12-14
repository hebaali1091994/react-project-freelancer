const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  projectName: { type: String ,required:true,minLength:10},
  budget: { type: Number },
  description:{type:String,required:true,minLength:30},
  uploadimg:{type:String},
  state:{type:String, default:"pending"},
  postproject:{type:String},
  client:{type:mongoose.Schema.Types.ObjectId},
  freelance:{type:mongoose.Schema.Types.ObjectId},
  skill:{type: Array,default:[]},
  category:{type:mongoose.Schema.Types.ObjectId},
  pay:{type:String},
  budget:{type:String},
  CurrencyCode:{type:String},
  CurrencySymbol:{type:String},
  step_Four_Currency_code:{type:String},
  Minimum_Per_hour:{type:String},
  Maximum_Per_hour:{type:String},
  Maximum_Per_hour:{type:String},
  Maximum_fix_price:{type:String},
  Minimum_fix_price:{type:String},
  Day:{type:String},
  type_of_project: {type:String},
  GUARANTEED: {type:String},

  FEATURED: {type:String},

  TOP_CONTEST:{type:String},

  HIGHLIGHT: {type:String},

  SEALED: {type:String},

  NDA:{type:String},

  PRIVATE: {type:String},

  StepFiveLongContest:{type:String},
},{timestamps:true});
module.exports = mongoose.model("Project", ProjectSchema);



   

  

 
  

   
  

  

    

  
   