
const mongoose= require('mongoose')
const conversionSchema=mongoose.Schema({
    membars: { type: Array},
},{timestamps:true})
module.exports=mongoose.model('conversion',conversionSchema)


