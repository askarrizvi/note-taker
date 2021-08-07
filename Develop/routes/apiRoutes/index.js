const router = require('express').Router();
const { notes } = require("../../db/db");

router.get("/api/notes", (req,res) => {

});

router.post ("/api/notes", (req,res) => {
    req.body.id = notes.length.toString();
});