const express = require('express');

const Route = express.Router();

Route.get('/electronics',(req,res)=>{
    res.render('electronics');
});

module.exports = Route;