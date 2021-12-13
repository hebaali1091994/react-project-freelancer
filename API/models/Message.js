const mongoose= require('mongoose')
const MessageSchema=mongoose.Schema({
conversion_id:{type:String},
Sender:{type:String},
Text:{type:String}


},{timestamps:true})
module.exports=mongoose.model('Message',MessageSchema)