const fs = require("fs");
const book = {
  title: "sunny day",
  author: "James Dean",
};

// const convertToJson = JSON.stringify(book);
// console.log(convertToJson);

// const convertToObj = JSON.parse(convertToJson);
// console.log(convertToObj.title);

// fs.writeFileSync("1-json.json", convertToJson);

//? const fileData = fs.readFileSync("1-json.json");
//? const objConvert = JSON.parse(fileData);

//? console.log(objConvert.author);

const fileData = fs.readFileSync("1-json.json");
const convertToObj = JSON.parse(fileData);
convertToObj.name = "Jason";
convertToObj.age = "55";
const convertToJson = JSON.stringify(convertToObj);
fs.writeFileSync("1-json.json", convertToJson);
