const express = require('express');
const Route = express.Router();
const ShopDB = require('../database/shopDetails');
const sessionDB = require('../database/session');

Route.post('/adminRegister',(req,res)=>{
    let Name  = req.body.name;
    let shopname  = req.body.shopname;
    let email  = req.body.email;
    let phone = req.body.phone;
    let address  = req.body.address;
    let area  = req.body.area;
    let username = req.body.username;
    let password  = req.body.password;

    let AdminDetails = {
        Name : Name,
        shopname : shopname,
        email : email ,
        phone : phone,
        address : address,
        area : area,
        username : username,
        password : password
    };

    ShopDB.create(AdminDetails,(err,result)=>{
        if(err) throw err;

        console.log(result);
        res.redirect('/signup');
    });
}); 


module.exports = Route;