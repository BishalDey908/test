const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userSchema:String,
    password:String,
    email:String
})

const userModel = new mongoose.model("tanuuser",userSchema)

// eslint-disable-next-line no-undef
module.exports = userModel