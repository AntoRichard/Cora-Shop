const transport = require('../Mail/mail');
const express = require('express');
const sessionDB = require('../database/session');
const userDB = require('../database/user');
const cc = require('coupon-code');

const route = express.Router();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const discountValue = [10,8,4,2,10,7,6,3,10,4];
route.get('/gen-mail', (req, res) => {
    sessionDB.find({}, (err, result) => {
        if (err) throw err;
        let username = result;
        username = username[0].username;
        // console.log(username);
        userDB.findOne({
            username: username
        }, (err, result) => {
            if (err) throw err;
            let email = result.email;
            transport.sendMail({
                to: email,
                from: 'Cora-Shop@cora.com',
                subject: "Cora Shop /nYour shopping partner",
                html: '<h3>Your coupon code is ' + cc.generate() + "</h3><br><h4>Use this coupon and get upto "+discountValue[getRandomInt(10)]+"% discount</h4>"
            }).then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            })
        });
    });
});




module.exports = route;