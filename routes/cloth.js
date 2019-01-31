const express = require('express');

const Route = express.Router();

Route.get('/cloth',(req,res)=>{
    res.render('cloth');
});

module.exports = Route;