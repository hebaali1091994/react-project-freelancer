const mongoose = require("mongoose");
const categrySchema = mongoose.Schema({
  categoryName: { type: String },
  description:{type:String},
  parentCategry: { type:String, default:null},
  subCate :{type:Array},
  img:{type:String, default:"hello.jpg"}
});
module.exports=mongoose.model("category",categrySchema);
