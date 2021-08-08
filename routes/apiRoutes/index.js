const router = require('express').Router();
var uniqid = require('uniqid');

const {
    findByID,
    createNewNote,
    deleteNote
} = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req,res) => {
    let results = notes;
    res.json(results);
});

router.post ("/notes", (req,res) => {
    req.body.id = uniqid.time();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete ("/notes/:id", (req,res) => {
    const note = findByID(req.params.id, notes);
    if (note) {
        results = deleteNote(note, notes);
    }
    res.json(results);
})
module.exports = router;