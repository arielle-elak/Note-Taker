const express = require('express');
const path = require('path');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/api', apiRouter);

// Wildcard HTML route to direct users to the index home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET HTML Route for the notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);


module.exports = app;
