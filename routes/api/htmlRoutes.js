const html = require('express').Router();


// GET HTML Route for the notes page
html.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard HTML route to direct users to the index home page
html.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);
