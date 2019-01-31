const express = require('express');

const Route = express.Router();

Route.get('/velachery',(req,res)=>{
    res.render('velachery');
});

module.exports = Route;