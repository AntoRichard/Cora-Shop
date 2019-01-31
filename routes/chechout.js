const express = require('express');
const routeMethod = require('../utils/checkout');


const Router = express.Router();

Router.get('/checkout',routeMethod.checkoutGet);

module.exports = Router;
