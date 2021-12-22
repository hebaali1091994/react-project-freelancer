const mongoose = require("mongoose");
const contractSchema = mongoose.Schema({
ContractName: { type: String },
  description:{type:String},
  budget: { type:String, default:null},
 freelanceId:{type:String},
 cilentId:{type:String},
 projectId:{type:String},
 feedbackfreelancer:{type:String},
 feedbackcilent:{type:String}

});
module.exports=mongoose.model("Contract",contractSchema);