const cryptr = require('../KEY/key');
const userDB = require('../database/user');
const sessionDB = require('../database/session');
const AdminDB = require('../database/shopDetails');

exports.loginPost = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    // let decyPassword = cryptr.decrypt(password);
    let userAuthInfo = {
        username: username,
        password: password
    };
    let sessionData = {
        username: username
    }
    console.log(userAuthInfo);
    if (username === 'admin') {
        AdminDB.findOne({
            username: username
        }, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                // console.log(result.password);
                if (password === result.password) {
                    console.log(`password matched`);
                    sessionDB.create(sessionData, (err, result) => {
                        if (err) throw err;
                        console.log(`session created`);
                    });

                    res.redirect('/index');

                } else {
                    res.redirect('/signup');
                }
            }

        });
    } else {
        userDB.findOne({
            username: username
        }, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                if (password === cryptr.decrypt(result.password)) {
                    console.log(`password matched`);
                    sessionDB.create(sessionData, (err, result) => {
                        if (err) throw err;
                        console.log(`session created`);
                    });

                    res.redirect('/index');

                } else {
                    res.redirect('/signup');
                }
            }

        });
    }


}