const validator = require("validator");
const chalk = require("chalk");
//? const remainder = require("./notes.js");

console.log("====================================");
//? const fs = require("fs");
//? fs.writeFileSync(
//?   "notes.js",
//?   "const remainder=(text)=>{return `Don't forget to: ${text}`}"
//? );
//? const note = remainder(" Walk the dog");

// ? console.log(note);
console.log("====================================");
console.log("");
console.log(validator.isURL("https://blank-page.com"));
console.log(chalk.green("success"));
console.log(chalk.inverse("whiteBackground"));
console.log(chalk.magentaBright.italic.bold("italic"));
console.log(chalk.hidden("John Cena"));
console.log(chalk.red.bold("look at me"));
