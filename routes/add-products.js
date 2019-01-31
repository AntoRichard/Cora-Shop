const express = require('express');

const Route = express.Router();

Route.get('/add-products',(req,res)=>{
    res.render('addproduct');
});

module.exports = Route;