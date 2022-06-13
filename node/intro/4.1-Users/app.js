const fs = require("fs");
const yargs = require("yargs");
const users = require("./users");
// const chalk = require("chalk");

// fs.writeFileSync("users.json", "{}");

yargs.command({
  command: "create",
  describe: "create a user",
  builder: {
    name: {
      describe: "user's name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user's email adress",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.createUser(argv.name, argv.email);
  },
});

yargs.command({
  command: "delete",
  describe: "delete a user",
  builder: {
    name: {
      describe: "User's name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.removeUser(argv.id);
  },
});

// yargs.command({
//   command:"update",
//   describe:"update user information"
// })

yargs.command({
  command: "read",
  describe: "read a user information",
  builder: {
    name: {
      describe: "User's name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.readUser(argv.name);
  },
});

yargs.parse();
