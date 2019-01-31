const express = require('express');
const routeMethod = require('../utils/contact');
const Router = express.Router();

Router.get('/contact',routeMethod.contactGet);

module.exports = Router;
