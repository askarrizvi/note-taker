//Require filesystem and path
const fs = require("fs");
const path = require("path");

function findByID(id, notes){
    const result = notes.filter((note) => note.id === id)[0];
    return result;
}

function createNewNote(body,notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)
      );
      return note;
}

function deleteNote(note, notes){
    const index = notes.findIndex(i => i.id === note.id);
    notes.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)
      );
      return notes;
}

module.exports = {
    findByID,
    createNewNote,
    deleteNote
  };