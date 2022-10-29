const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET HTML Route for the notes page
html.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard HTML route to direct users to the index home page
html.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// Listen for local port input on 3001
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
