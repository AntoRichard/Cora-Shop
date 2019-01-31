const mongoose = require('mongoose');

let sessionSchema = new mongoose.Schema({
    username : String
});

let sessionModel = mongoose.model('session',sessionSchema);

module.exports = sessionModel;