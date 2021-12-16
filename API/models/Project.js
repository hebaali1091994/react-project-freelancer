const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  projectName: { type: String ,required:true,minLength:10},
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



   

  

 
  ChooseName: { type: String ,minLength:10},
  // budget: { type: Number,default:null },
  // Tellus:{type:String,minLength:30},
  // uploadimg:{type:String, default:null},
  // state:{type:String, default:"pending"},
  // postproject:{type:String, default:null},
  // client:{type:mongoose.Schema.Types.ObjectId, default:null},
  // freelance:{type:mongoose.Schema.Types.ObjectId ,default:null},
  // skill:{type: Array,default:[],default:null},
  // category:{type:mongoose.Schema.Types.ObjectId ,default:null},
  // pay:{type:String ,default:null},
  
  // CurrencyCode:{type:String ,default:null},
  // CurrencySymbol:{type:String ,default:null},
  // step_Four_Currency_code:{type:String ,default:null},
  // Minimum_Per_hour:{type:String ,default:null},
  // Maximum_Per_hour:{type:String ,default:null},

  // Maximum_fix_price:{type:String ,default:null},
  // Minimum_fix_price:{type:String ,default:null},
  // Day:{type:String ,default:null},
  // type_of_project: {type:String ,default:null},
  // GUARANTEED: {type:String ,default:null},

  // FEATURED: {type:String ,default:null},

  // TOP_CONTEST:{type:String ,default:null},

  // HIGHLIGHT: {type:String ,default:null},

  // SEALED: {type:String ,default:null},

  // NDA:{type:String ,default:null},

  // PRIVATE: {type:String ,default:null},
  // userid:{type:String ,default:null},
  // StepFiveLongContest:{type:String ,default:null},
  userid : { type: String, default:null},
    ChooseName: { type: String },
    Tellus: { type: String },
    uploadimg: { type: String },
    postproject: { type: String },
    pay: { type: String, default:null},
    budget: { type: String, default:null},
    CurrencyCode: { type: String, default:null},
    CurrencySymbol: { type: String, default:null},
    step_Four_Currency_code: { type: String, default:null},
    Minimum_Per_hour: { type: String, default:null},
    Maximum_Per_hour: { type: String, default:null},
    Maximum_fix_price: { type: String, default:null},
    Minimum_fix_price: { type: String, default:null},
    Day: { type: String, default:null},
    type_of_project: { type: String, default:null},
    GUARANTEED: { type: String, default:null},
    FEATURED: { type: String, default:null},
    TOP_CONTEST: { type: String, default:null},
    HIGHLIGHT: { type: String, default:null},
    SEALED: { type: String, default:null},
    NDA: { type: String, default:null},
    PRIVATE: { type: String, default:null},
    StepFiveLongContest: { type: String, default:null},
},{timestamps:true});
module.exports = mongoose.model("Project", ProjectSchema)