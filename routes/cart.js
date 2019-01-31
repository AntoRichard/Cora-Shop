const express = require('express');
const routeMethod = require('../utils/cart');
const Router = express.Router();

Router.get('/cart',routeMethod.cartGet);

module.exports = Router;
