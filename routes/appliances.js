const express = require('express');

const Route = express.Router();

Route.get('/appliances',(req,res)=>{
    res.render('appliances');
});

module.exports = Route;