const mongoose = require("mongoose");
const skillSchema = {
  project_worked: { type: String },
  skill_name:{type:String},
  category_id:{type:mongoose.Schema.Types.ObjectId},
};
module.exports = mongoose.model("skills", skillSchema);
   


