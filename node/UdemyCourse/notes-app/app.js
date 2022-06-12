const fs = require("fs");

s.writeFileSync("note.txt", "My name is not Andrew");

fs.appendFileSync("note.txt", " TEST");
