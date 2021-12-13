const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  projectName: { type: String ,required:true,minLength:10},
  budget: { type: Number },
  description:{type:String,required:true,minLength:30},
  state:{type:String, default:"pending"},
  client:{type:mongoose.Schema.Types.ObjectId},
  freelance:{type:mongoose.Schema.Types.ObjectId},
  skill:{type: Array,default:[]},
  category:{type:mongoose.Schema.Types.ObjectId},

},{timestamps:true});
module.exports = mongoose.model("Project", ProjectSchema);
