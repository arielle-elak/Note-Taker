const apiRouter = require('express').Router();
const { readAndAppend, readFromFile, writeToFile } = require('../utils/fs');

// GET /api/notes` should read the `db.json` file and return all saved notes as JSON
apiRouter.get('/', (req, res) => {
    console.info(`${req.method} Request: Retrieve all current notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
apiRouter.post('/', (req, res) => {
    console.info(`${req.method} Request: Post a new note`);
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

//DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete.
apiRouter.delete('/', (req, res) => {
    console.info(`${req.method} Request: Delete a note`);

});

// Export these routes to be used by index
module.exports = apiRouter;
