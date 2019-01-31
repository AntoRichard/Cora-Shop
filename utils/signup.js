const cryptr = require('../KEY/key');

const userDB = require('../database/user');


exports.signupGet = (req, res) => {
    res.render('signup');
}


exports.signupPost = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let username = req.body.username;
    let password = req.body.password;

    let encyPassword = cryptr.encrypt(password);

    let userdata = {
        name: name,
        email: email,
        phone: phone,
        username: username,
        password: encyPassword
    };
    userDB.create(userdata, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/signup');
    });
    
}