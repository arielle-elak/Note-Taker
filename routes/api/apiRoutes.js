const apiRouter = require('express').Router();
const store = require('../db/store');

// GET /api/notes` should read the `db.json` file and return all saved notes as JSON
apiRouter.get( , (req, res) => {

});

// POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
apiRouter.post( , (req, res) => {

});

//DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete.
apiRouter.delete( , (req, res) => {

});
