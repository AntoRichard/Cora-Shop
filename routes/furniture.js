const express = require('express');

const Route = express.Router();

Route.get('/furniture',(req,res)=>{
    res.render('furniture');
});

module.exports = Route;