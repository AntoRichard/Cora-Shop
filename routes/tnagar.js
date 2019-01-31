const express = require('express');

const Route = express.Router();

Route.get('/tnagar',(req,res)=>{
    res.render('tnagar');
});

module.exports = Route;