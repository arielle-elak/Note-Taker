const apiRouter = require('express').Router();
const db = require('../db/db.json');

// GET /api/notes` should read the `db.json` file and return all saved notes as JSON
apiRouter.get('/api/notes', (req, res) => {
    readFromFile(db).then((data) =>
    res.json(JSON.parse(data))
    );
    console.log("Get Note");
});

// POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
apiRouter.post('/api/notes', (req, res) => {
    console.log("Post Note")
});

//DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete.
apiRouter.delete('api/notes', (req, res) => {
    console.log("Delete Note");
});

// Export these routes to be used by index
module.exports = apiRouter;
