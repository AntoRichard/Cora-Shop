const sessionDB = require('../database/session');

exports.logoutGet = (req, res) =>{
    sessionDB.remove((err)=>{
        if(err) throw err;
        res.redirect('/signup');
    })
};