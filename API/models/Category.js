const mongoose = require("mongoose");
const categrySchema = mongoose.Schema({
  categoryName: { type: String },
  description:{type:String},
  parentCategry: { type: mongoose.Schema.Types.ObjectId, default:null},
  subCate :{type:Array}
   
});
module.exports=mongoose.model("category",categrySchema);
