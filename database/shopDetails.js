const mongoose = require('mongoose');

let shopDetailsSchema = new mongoose.Schema({
    Name : String,
    shopname : String,
    email : String ,
    phone : Number,
    address : String,
    area : String,
    username : String,
    password : String
});

let shopDetailsModel = mongoose.model('ShopDetails',shopDetailsSchema);

module.exports = shopDetailsModel;