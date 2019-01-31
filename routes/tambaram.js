const express = require('express');

const Route = express.Router();

Route.get('/tambaram',(req,res)=>{
    res.render('tambaram');
});

module.exports = Route;