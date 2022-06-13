const fs = require("fs");
const chalk=require("chalk")

const createUsers = (pesronName, email) => {
  const users = loadUsers();
  const duplicatedUser = users.filter((user) => user.id === id);
  if (!duplicatedUser) {
    users.push({
      name: pesronName,
      id: id,
      email: email,
    });
    console.log(chalk.green.inverse("You created a new user!"));
    saveUsers(users);
  } else {
    console.log(chalk.red.inverse("This Id is already in use"));
  }
};

const removeUser = (id) => {
  const users = loadUsers;
  const usersToKeep=users.filter((user)=>user.id!==id);
  if(usersToKeep.length<users.length){
    console.log(chalk.green.inverse("That user has been deleted"));
    saveUsers(usersToKeep);
  }else{
    console.log(chalk.red.inverse("This user does not exsit."));
  }
};
const readUser=(id)=>{
  const users=loadUsers();
  const user=users.find(((user)=>user.id===id))
  if(user){
    console.log(chalk.green.inverse("User Information:"));
    console.log(user.id+" "+user.name+" "+ user.email);
  }else{
    console.log(chalk.red.inverse("User does not exist"));
  }
}

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return (data = JSON.parse(dataJSON));
  } catch (e) {
    return [];
  }
};

const saveNotes = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", users);
};

module.exports = {
  createUser: createUsers,
  loadUsers: loadUsers,
  saveNotes: saveNotes,
  removeUser:removeUser,
  readUser:readUser,
};
