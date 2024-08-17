const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    place:String
},{timestamp:true})

let userModel = mongoose.model('user',userSchema)
module.exports = userModel