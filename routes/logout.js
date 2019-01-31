const express = require('express');
const logoutGet = require('../utils/logout');
const Route = express.Router();

Route.get('/logout',logoutGet.logoutGet)

module.exports = Route;