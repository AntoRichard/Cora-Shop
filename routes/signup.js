const express = require('express');
const cryptr = require('../KEY/key');
const userDB = require('../database/user');
const routeMethod = require('../utils/signup');
const Router = express.Router();

Router.get('/signup',routeMethod.signupGet);

Router.post('/signup',routeMethod.signupPost);

module.exports = Router;
