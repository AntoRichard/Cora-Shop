const isLoggedIn = require('../Auth/isLoggedIn');

exports.checkoutGet = (req, res) => {
    console.log(isLoggedIn);
    res.render('checkout');
}