const fs = require("fs");
const chalk = require("chalk");
// const { NOTINITIALIZED } = require("dns");

const getNotes = () => {
  return `Don't forget to: `;
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatedNote = notes.find((note) => note.title === title);
  if (!duplicatedNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Yay! You just added a brand new note"));
  } else {
    console.log(chalk.white.inverse("sorry! that title is already taken"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return (data = JSON.parse(dataJSON));
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("This note will be removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("Thi`s note does not exist!"));
  }
};

const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your notes are:"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.blue.inverse("Your note is: "));
    console.log(note.title + " " + note.body);
  } else {
    console.log("Does not exist");
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNotes: readNotes,
};
