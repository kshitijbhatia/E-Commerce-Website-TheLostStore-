const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String
})

const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel;