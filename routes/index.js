const express = require('express');
const routeMethod = require('../utils/index');
const Router = express.Router();

Router.get('/index',routeMethod.indexGet);

Router.post('/index',routeMethod.indexPost);

module.exports = Router;