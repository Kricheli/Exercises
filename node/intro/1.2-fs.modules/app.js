const fs = require("fs");
// (1)
fs.writeFileSync("test.txt", "TEST");

// (2)
fs.renameSync("test.txt", "renamedFile.txt");

// (3)
const data = fs.readdirSync("../UdemyCourse/");
console.log(data);

// (4)
const fileData = fs.readFileSync("../UdemyCourse/notes-app/note.txt");
console.log(fileData.toString());
