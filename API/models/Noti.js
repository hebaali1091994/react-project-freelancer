const mongoose = require('mongoose');

const NotiSchema = new mongoose.Schema({
    message:{type:String},
    date:{type:date}

},{timestamps:true});

module.exports = mongoose.model('Noti', NotiSchema)
