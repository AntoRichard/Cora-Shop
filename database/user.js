const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    username : String,
    password : String
});

let userModel = mongoose.model('users',userSchema);

module.exports = userModel;