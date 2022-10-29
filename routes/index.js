const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/notes', apiRouter);

module.exports = app;
