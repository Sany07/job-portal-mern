const express = require('express');
const apiRouters = express.Router();
const authRouters = require('./auth/authRoutes');


apiRouters.use('/auth', authRouters);


module.exports = apiRouters;