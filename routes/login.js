const express = require('express');
const cryptr = require('../KEY/key');
const userDB = require('../database/user');
const routeMethod = require('../utils/login');
const Route = express.Router();

Route.post('/login',routeMethod.loginPost);

module.exports = Route;