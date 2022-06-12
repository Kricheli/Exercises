const remainder = require("./notes.js");
const fs = require("fs");
fs.writeFileSync(
  "notes.js",
  "const remainder=(text)=>{return `Don't forget to: ${text}`}"
);
const note = remainder(" Walk the dog");

console.log(note);
