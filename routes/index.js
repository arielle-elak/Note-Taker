const express = require('express');

// Import our modular routers for /apiRoutes
const apiRoutes = require('./apiRoutes');

const app = express();

app.use('/notes', apiRoutes);

module.exports = app;
